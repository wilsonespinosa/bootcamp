export interface MyActionsInterface {
    createRecord(object:Object);
    listRecord():void;
    updateRecord(object:Object);
    deleteRecord(object:Object);
    getRecordById(id: string);
    getNextRecordId();
}
