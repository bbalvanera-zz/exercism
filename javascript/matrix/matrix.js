class Matrix {
  constructor(input = '') {
    this.rows = this._getRows(input);
    this.columns = this._getColumns(this.rows);
  }

  _getRows(values) {
    return values
      .split('\n')
      .map(row => row.split(' ').map(el => Number(el)));
  }

  _getColumns(rows) {
    const m = rows.length;
    const n = rows[0].length;

    const columns = new Array(n);
    for (let j = 0; j < n; j++) {
      columns[j] = new Array(m);
      for (let i = 0; i < m; i++) {
        columns[j][i] = rows[i][j];
      }
    }

    return columns;
  }
}

module.exports = Matrix;