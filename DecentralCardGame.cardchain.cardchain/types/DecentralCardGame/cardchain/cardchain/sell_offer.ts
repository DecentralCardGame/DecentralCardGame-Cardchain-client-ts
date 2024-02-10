/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export enum SellOfferStatus {
  open = 0,
  sold = 1,
  removed = 2,
  UNRECOGNIZED = -1,
}

export function sellOfferStatusFromJSON(object: any): SellOfferStatus {
  switch (object) {
    case 0:
    case "open":
      return SellOfferStatus.open;
    case 1:
    case "sold":
      return SellOfferStatus.sold;
    case 2:
    case "removed":
      return SellOfferStatus.removed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SellOfferStatus.UNRECOGNIZED;
  }
}

export function sellOfferStatusToJSON(object: SellOfferStatus): string {
  switch (object) {
    case SellOfferStatus.open:
      return "open";
    case SellOfferStatus.sold:
      return "sold";
    case SellOfferStatus.removed:
      return "removed";
    case SellOfferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SellOffer {
  seller: string;
  buyer: string;
  card: number;
  price: string;
  status: SellOfferStatus;
}

function createBaseSellOffer(): SellOffer {
  return { seller: "", buyer: "", card: 0, price: "", status: 0 };
}

export const SellOffer = {
  encode(message: SellOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }
    if (message.card !== 0) {
      writer.uint32(24).uint64(message.card);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOffer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seller = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.buyer = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.card = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SellOffer {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      card: isSet(object.card) ? Number(object.card) : 0,
      price: isSet(object.price) ? String(object.price) : "",
      status: isSet(object.status) ? sellOfferStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: SellOffer): unknown {
    const obj: any = {};
    if (message.seller !== "") {
      obj.seller = message.seller;
    }
    if (message.buyer !== "") {
      obj.buyer = message.buyer;
    }
    if (message.card !== 0) {
      obj.card = Math.round(message.card);
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.status !== 0) {
      obj.status = sellOfferStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SellOffer>, I>>(base?: I): SellOffer {
    return SellOffer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SellOffer>, I>>(object: I): SellOffer {
    const message = createBaseSellOffer();
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.card = object.card ?? 0;
    message.price = object.price ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
