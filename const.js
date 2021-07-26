const PRINT_PORT = {
  PRINT_PORT_0: "PRINTERPORT0",
  PRINT_PORT_1: "PRINTERPORT1",
  PRINT_PORT_2: "PRINTERPORT2",
};

const CONFIG = {
  PRINTER: {
    BAUDRATE: 9600,
    FONT_CODE: "",
    FONT_TYPE: "A",
    FONT_ALIGNMENT: "Left",
    FONT_SIZE: "00",
    FONT_UNDERLINE: "off",
    FONT_EMPHASIZED: "off",
  },
  SCANNER: {
    TIMEOUT: 30,
    CONTINUOUS: "off",
  },
  SOUND: "off",
};

const PARITY = {
  PARITY_NONE: "NONE",
  PAIRTY_ODD: "ODD",
  PARITY_EVEN: "EVEN",
};

const STOP_BITS = {
  STOP_BITS_ONE: "1",
  STOP_BITS_ONE_POINT_FIVE: "1.5",
  STOP_BITS_TWO: "2",
};

const DATA_BITS = {
  DATA_BITS_5: "BITS5",
  DATA_BITS_6: "BITS6",
  DATA_BITS_7: "BITS7",
  DATA_BITS_8: "BITS8",
};

export { PRINT_PORT, CONFIG, PARITY, STOP_BITS, DATA_BITS };