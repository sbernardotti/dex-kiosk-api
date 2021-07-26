import BinaryService from "./binaryService";
import { PRINT_PORT } from "./const";

const TAG = "[DexKioskService]";

// TODO: return promises
//
export default class DexKioskService {
  constructor() {
    this._b2bapis = window.b2bapis;
    this._binaryService = new BinaryService();

    this.log("Service init.");
  }

  /**
   * Send logs to player.
   * @param {string} message
   */
  log(message) {
    let l = {
      type: "log",
      content: { tag: TAG, message: message },
      origin: "DexTemplate",
    };
    console.log(l.content.message);
    window.parent.postMessage(l, "*");
  }

  /**
   * Open printer serial port.
   */
  openPrinterSerial() {
    const printPort = PRINT_PORT.PRINT_PORT_1;
    const options = {
      baudRate: parseInt(CONFIG.PRINTER.BAUDRATE),
      parity: PARITY.PARITY_NONE,
      dataBits: DATA_BITS.DATA_BITS_8,
      stopBits: STOP_BITS.STOP_BITS_ONE,
    };

    function onlistener(printerSerialData) {
      this.log(
        `(openPrinterSerial) Data: ${printerSerialData.data}. Port: ${printerSerialData.result}.`
      );
    }

    this.log(`(openPrinterSerial) CALLED.`);

    try {
      this._b2bapis.serialprint.open(printPort, options, onlistener);
      this.log(`(openPrinterSerial) SUCCESS.`);
    } catch (err) {
      this.log(
        `(openPrinterSerial) ERROR ${err.code} ${err.errorName} ${err.errorMessage}.`
      );
    }
  }

  /**
   * Close printer serial port.
   */
  closePrinterSerial() {
    const printPort = PRINT_PORT.PRINT_PORT_1;

    this.log(`(closePrinterSerial) CALLED.`);

    try {
      this._b2bapis.serialprint.close(printPort);
      this.log(`(closePrinterSerial) SUCCESS.`);
    } catch (err) {
      this.log(
        `(closePrinterSerial) ERROR ${err.code} ${err.errorName} ${err.errorMessage}.`
      );
    }
  }

  /**
   * Write and print receipt.
   * @param {string} data
   */
  printReceipt(data) {
    const printPort = PRINT_PORT.PRINT_PORT_1;
    const printData = this._binaryService.stringToHex(
      "\n" + this._binaryService.getPrinterCodes() + data
    );

    this.log(`(printReceipt) CALLED.`);

    try {
      this._b2bapis.serialprint.writeData(
        printPort,
        printData,
        printData.length
      );
      this.log(`(printReceipt) SUCCESS.`);
    } catch (err) {
      this.log(
        `(printReceipt) ERROR ${err.code} ${err.errorName} ${err.errorMessage}.`
      );
    }
  }
}
