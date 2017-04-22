const Cell = require('./Cell');

module.exports = class Row {
    constructor(rowData) {
        this.fields = Object.keys(rowData);
        this.cells = this.fields.map(field => {
            return new Cell(field, rowData[field]);
        });
    }

    getWidths() {
        return this.cells.map(cell => {
            return cell.getWidth();
        });
    }

    setWidths(widths) {
        this.widths = widths;
    }

    putCells() {
        let stringData = '';
        this.cells.forEach((cell, index) => {
            cell.adjustCellContent(this.widths[index]);
            stringData += cell.content;
        });
        console.log(stringData);
    }

    putDevider() {
        let hr = '';
        this.cells.forEach((cell, index) => {
            hr += '-'.repeat(cell.content.length - 1) + ' ';
        });
        console.log(hr);
    }
}