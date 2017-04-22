module.exports = class Cell {
    constructor(columnName, content) {
        this.columnName = columnName;
        this.content = content + '';
    }

    getWidth() {
        return this.content.length;
    }

    adjustCellContent(width) {
        const diff = width - this.content.length;
        const space = ' ';
        const spacesRequired = space.repeat(diff + 1);
        this.content = this.content + spacesRequired;
    }
}
