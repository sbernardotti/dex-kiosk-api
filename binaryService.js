import { CONFIG } from "./const";

export default class BinaryService {
  stringToHex(tmp) {
    let str = "";
    let tmp_len = tmp.length;
    let c;

    for (let i = 0; i < tmp_len; i += 1) {
      c = tmp.charCodeAt(i).toString(16);
      switch (c) {
        // --Print and Line Feed \1
        case "1":
          c = "LF";
          break;
        // --Character Size Default \2
        case "2":
          c = "1D2100";
          break;
        // --Character Size \3
        case "3":
          c = "1D21" + CONFIG.PRINTER.FONT_SIZE;
          break;
        // --Character Right Space Default \4
        case "4":
          c = "1B2000";
          break;
        // --Character Right Space \5
        case "5":
          let spaceSize = "99";
          c = "1B20" + spaceSize;
          break;
        // --Character Font Type A \6
        case "6":
          c = "1B2100";
          break;
        // --Character Font Type B \7
        case "7":
          c = "1B2101";
          break;
        // --Underline Text Default \10
        case "8":
          c = "1B2D00";
          break;
        // --Underline Text 1 \11
        case "9":
          c = "1B2D01";
          break;
        // --Enter \n
        case "a":
          c = "0A";
          break;
        // --Underline Text 2 \13
        case "b":
          c = "1B2D02";
          break;
        // --Default Line Spacing \14
        case "c":
          c = "1B32";
          break;
        // --Line Spacing \15
        case "d":
          let lineSpacing = "10";
          c = "1B33" + lineSpacing;
          break;
        // --Character Emphasized Off \16
        case "e":
          c = "1B4500";
          break;
        // --Character Emphasized On \17
        case "f":
          c = "1B4501";
          break;
        // --Double Strike Text Off \21
        case "11":
          c = "1B4700";
          break;
        // --Double Strike Text On \22
        case "12":
          c = "1B4701";
          break;
        // --Print and Feed Paper Default \24
        case "14":
          c = "1B4A00";
          break;
        // --Print and Feed Paper \25
        case "15":
          let feedSize = "99";
          c = "1B4A" + feedSize;
          break;
        // --ClockWise Rotation Off \26
        case "16":
          c = "1B5600";
          break;
        // --ClockWise Rotation On \27
        case "17":
          c = "1B5601";
          break;
        // --Position Alignment Left \30
        case "18":
          c = "1B6100";
          break;
        // --Position Alignment Center \31
        case "19":
          c = "1B6101";
          break;
        // --Position Alignment Right \42
        case "22":
          c = "1B6102";
          break;
        // --Upside-Down Mode Off \45
        case "25":
          c = "1B7B00";
          break;
        // --Upside-Down Mode On \47
        case "27":
          c = "1B7B01";
          break;
        // --Barcode Printing \50
        case "28":
          c = "1D6B00";
          break;
        // --Barcode Width \51
        case "29":
          let widthSize = "00";
          c = "1D77" + widthSize;
          break;
        default:
          break;
      }
      str += c.toString(16);

      if (i == tmp_len - 1) str += "1B69";
    }

    return str;
  }

  getPrinterCodes() {
    let codes = "";

    if (CONFIG.PRINTER.FONT_TYPE == "A") {
      codes = CONFIG.PRINTER.FONT_CODE + "\6";
    } else {
      codes = CONFIG.PRINTER.FONT_CODE + "\7";
    }

    if (CONFIG.PRINTER.FONT_ALIGNMENT == "Left") {
      codes = CONFIG.PRINTER.FONT_CODE + "\30";
    } else if (CONFIG.PRINTER.FONT_ALIGNMENT == "Center") {
      codes = CONFIG.PRINTER.FONT_CODE + "\31";
    } else {
      codes = CONFIG.PRINTER.FONT_CODE + "\42";
    }

    codes = CONFIG.PRINTER.FONT_CODE + "\3";

    if (CONFIG.PRINTER.FONT_UNDERLINE == "off") {
      codes = CONFIG.PRINTER.FONT_CODE + "\10";
    } else {
      codes = CONFIG.PRINTER.FONT_CODE + "\11";
    }

    if (CONFIG.PRINTER.FONT_EMPHASIZED == "off") {
      codes = CONFIG.PRINTER.FONT_CODE + "\16";
    } else {
      codes = CONFIG.PRINTER.FONT_CODE + "\17";
    }

    return codes;
  }
}
