class AFD {

  private received = 0;
  private change = 0;

  private initialState = 0;
  private state = this.initialState;
  private acceptingStates = [11, 12, 13, 14, 15, 16];
  private accepted = false;

  /*
    rows = current state
    columns = input character index (1..5, a = 6, b = 7, c = 8)
    [0, 1, 2, *,*, 5, a, b, c]
  */
  private transitions = [
    [-1,  1,  2, 0,0,  5,  0,  0,  0],
    [-1,  2,  3, 0,0,  6,  1,  1,  1],
    [-1,  3,  4, 0,0,  7,  2,  2,  2],
    [-1,  4,  5, 0,0,  8,  3,  3,  3],
    [-1,  5,  6, 0,0,  9,  4,  4,  4],
    [-1,  6,  7, 0,0, 10,  5,  5,  5],
    [-1,  7,  8, 0,0,  6, 11,  6,  6],
    [-1,  8,  9, 0,0,  7, 12, 13,  7],
    [-1,  9, 10, 0,0,  8, 12, 14, 15],
    [-1, 10,  9, 0,0,  9, 12, 14, 16],
    [-1, 10, 10, 0,0, 10, 12, 14, 16],
    [-1, -1, -1, 0,0, -1, -1, -1, -1],
    [-1, -1, -1, 0,0, -1, -1, -1, -1],
    [-1, -1, -1, 0,0, -1, -1, -1, -1],
    [-1, -1, -1, 0,0, -1, -1, -1, -1],
    [-1, -1, -1, 0,0, -1, -1, -1, -1],
    [-1, -1, -1, 0,0, -1, -1, -1, -1]
  ];

  private candies = {
    "A": 6.00,
    "B": 7.00,
    "C": 8.00
  };

  getState() {
    return this.state;
  }

  getChange() {
    return this.change;
  }

  isAccepted() {
    return this.accepted;
  }

  consume(elem: string) {
    let elemInt = 0;
    // Dinheiro do usuário
    if (elem === '5' || elem === '2' || elem === '1') {
      elemInt = parseInt(elem);
    // Doces
    } else if (elem === 'a') {
      elemInt = 6;
    } else if (elem === 'b') {
      elemInt = 7;
    } else if (elem === 'c') {
      elemInt = 8;
    }

    if (elem === '5' || elem === '2' || elem === '1') {
      this.received += elemInt;
      this.change += elemInt;
    }

    this.state = this.transitions[this.state][elemInt];

    if (this.acceptingStates.includes(this.state)) {
      this.accepted = true;
      if (this.state === 12) { // A com troco
        this.change -= this.candies["A"]
      } else if (this.state === 14) { // B com troco
        this.change -= this.candies["B"]
      } else if (this.state === 16) { // C com troco
        this.change -= this.candies["C"]
      } else {
        this.change -= this.received;
      }
    }

    return this.state;
  }
}

export default AFD;