const Row = require('./Row');
const Cell = require('./Cell');

module.exports = class Head extends Row {
    constructor(rowData) {
        super(rowData);
        this.cells = this.fields.map(field => {
            return new Cell(field, field);
        });
    }
}
