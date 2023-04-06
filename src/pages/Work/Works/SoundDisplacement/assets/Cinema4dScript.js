export const Cinema4dScript = 
`import c4d
from c4d import utils as u

def RemoveTagsWithMissingSelection(op):
    materialTags = [] 
    selectionTags = [] 
    tags = op.GetTags() 
    for t in tags: 
        if t.GetType() == 5616: 
            materialTags.append(t)
        if t.GetType() == 5673: 
            selectionTags.append(t.GetName())
            
    for m in materialTags: 
        restriction = m[c4d.TEXTURETAG_RESTRICTION] 
        if restriction not in selectionTags: 
            if restriction != "":
                doc.AddUndo(c4d.UNDO_DELETE, m)
                m.Remove() 
    return True

def RemoveEmptySelectionTag(op):
    selectionTags = [5673, 
                     5674, 
                     5701] 
    tags = op.GetTags() 
    for t in tags: 
        if t.GetType() in selectionTags: 
            baseSelect = t.GetBaseSelect() 
            if baseSelect.GetCount() == 0: 
                doc.AddUndo(c4d.UNDOTYPE_DELETE, t) 
                t.Remove() 
    return True


def SplitCommand(op):
    if op != None:
        bc = c4d.BaseContainer()
        mode = c4d.MODELINGCOMMANDMODE_POLYGONSELECTION
        res = c4d.utils.SendModelingCommand(c4d.MCOMMAND_SPLIT, [op], mode, bc, doc)
        return res[0]
    
def SplitByPolySelection(obj):
    group = c4d.BaseObject(c4d.Onull)
    group.SetName(obj.GetName())
    group.InsertAfter(obj)

    materials = doc.GetMaterials()
    insideMaterialTag = c4d.TextureTag()
    outsideMaterialTag = c4d.TextureTag()
    
    for material in materials:
        if material.GetName() == 'Inside material':
            insideMaterialTag.SetMaterial(material)
        if material.GetName() == 'Outside material':
            outsideMaterialTag.SetMaterial(material)
    
    selectedPolys = obj.GetPolygonS()
    tags = obj.GetTags()
    for t in reversed(tags):
        if t.GetType() == 5673: 
            polygonSelection = t.GetBaseSelect()
            polygonSelection.CopyTo(selectedPolys)
            result = SplitCommand(obj)
            result.SetName(obj.GetName())
            result.InsertUnder(group)
            doc.AddUndo(c4d.UNDOTYPE_NEW, result)
            RemoveEmptySelectionTag(result)
            RemoveTagsWithMissingSelection(result)
    
            tags = result.GetTags()
            for tag in tags:
                if tag.GetName() == 'Outside Faces':
                    result.InsertTag(outsideMaterialTag)
                    result.SetName('Outside')
                 
                    
                if tag.GetName() == 'Inside Faces':
                    result.InsertTag(insideMaterialTag)
                    result.SetName('Inside')

    obj.Remove()

def main():
    c = c4d.documents.GetActiveDocument()
    selected = doc.GetActiveObjectsFilter(False, 1036557, False) 
    for obj in selected:
        obj[c4d.ID_FRACTURE_COLORIZE] = False
        obj[c4d.ID_FRACTURE_CREATE_INSIDE_FACE_SELECTION] = True
        obj[c4d.ID_FRACTURE_CREATE_OUTSIDE_FACE_SELECTION] = True
        doc.SetActiveObject(obj)
        childObject = obj.GetChildren()
        obj.SetName(childObject[0].GetName())
        c4d.CallCommand(12236) 
        
        fracments = obj.GetChildren() 
        
        for fragment in fracments:
            SplitByPolySelection(fragment)

def createMaterials():
    materials = doc.GetMaterials()
    materialNames = [material.GetName() for material in materials]
    if all(x in materialNames for x in ['Inside material', 'Outside material']):
        return
    
    insideMaterial = c4d.Material()
    insideMaterial.SetName("Inside material")
    insideMaterial[c4d.MATERIAL_COLOR_COLOR] = c4d.Vector(1,0,0)
    doc.InsertMaterial(insideMaterial, None)
    
    outsideMaterial = c4d.Material()
    outsideMaterial.SetName("Outside material")
    outsideMaterial[c4d.MATERIAL_COLOR_COLOR] = c4d.Vector(0,0,1)
    doc.InsertMaterial(outsideMaterial, None)

if __name__=='__main__':
    createMaterials()
    main()
    c4d.EventAdd()
`