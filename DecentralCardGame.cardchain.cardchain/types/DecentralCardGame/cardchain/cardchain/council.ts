/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export enum Response {
  Yes = 0,
  No = 1,
  Suggestion = 2,
  UNRECOGNIZED = -1,
}

export function responseFromJSON(object: any): Response {
  switch (object) {
    case 0:
    case "Yes":
      return Response.Yes;
    case 1:
    case "No":
      return Response.No;
    case 2:
    case "Suggestion":
      return Response.Suggestion;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Response.UNRECOGNIZED;
  }
}

export function responseToJSON(object: Response): string {
  switch (object) {
    case Response.Yes:
      return "Yes";
    case Response.No:
      return "No";
    case Response.Suggestion:
      return "Suggestion";
    case Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CouncelingStatus {
  councilOpen = 0,
  councilCreated = 1,
  councilClosed = 2,
  commited = 3,
  revealed = 4,
  suggestionsMade = 5,
  UNRECOGNIZED = -1,
}

export function councelingStatusFromJSON(object: any): CouncelingStatus {
  switch (object) {
    case 0:
    case "councilOpen":
      return CouncelingStatus.councilOpen;
    case 1:
    case "councilCreated":
      return CouncelingStatus.councilCreated;
    case 2:
    case "councilClosed":
      return CouncelingStatus.councilClosed;
    case 3:
    case "commited":
      return CouncelingStatus.commited;
    case 4:
    case "revealed":
      return CouncelingStatus.revealed;
    case 5:
    case "suggestionsMade":
      return CouncelingStatus.suggestionsMade;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CouncelingStatus.UNRECOGNIZED;
  }
}

export function councelingStatusToJSON(object: CouncelingStatus): string {
  switch (object) {
    case CouncelingStatus.councilOpen:
      return "councilOpen";
    case CouncelingStatus.councilCreated:
      return "councilCreated";
    case CouncelingStatus.councilClosed:
      return "councilClosed";
    case CouncelingStatus.commited:
      return "commited";
    case CouncelingStatus.revealed:
      return "revealed";
    case CouncelingStatus.suggestionsMade:
      return "suggestionsMade";
    case CouncelingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Council {
  cardId: number;
  voters: string[];
  hashResponses: WrapHashResponse[];
  clearResponses: WrapClearResponse[];
  treasury: string;
  status: CouncelingStatus;
  trialStart: number;
}

export interface WrapClearResponse {
  user: string;
  response: Response;
  suggestion: string;
}

export interface WrapHashResponse {
  user: string;
  hash: string;
}

function createBaseCouncil(): Council {
  return { cardId: 0, voters: [], hashResponses: [], clearResponses: [], treasury: "", status: 0, trialStart: 0 };
}

export const Council = {
  encode(message: Council, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardId !== 0) {
      writer.uint32(8).uint64(message.cardId);
    }
    for (const v of message.voters) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.hashResponses) {
      WrapHashResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.clearResponses) {
      WrapClearResponse.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.treasury !== "") {
      writer.uint32(42).string(message.treasury);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.trialStart !== 0) {
      writer.uint32(56).uint64(message.trialStart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Council {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCouncil();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cardId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voters.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hashResponses.push(WrapHashResponse.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clearResponses.push(WrapClearResponse.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.treasury = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.trialStart = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Council {
    return {
      cardId: isSet(object.cardId) ? Number(object.cardId) : 0,
      voters: Array.isArray(object?.voters) ? object.voters.map((e: any) => String(e)) : [],
      hashResponses: Array.isArray(object?.hashResponses)
        ? object.hashResponses.map((e: any) => WrapHashResponse.fromJSON(e))
        : [],
      clearResponses: Array.isArray(object?.clearResponses)
        ? object.clearResponses.map((e: any) => WrapClearResponse.fromJSON(e))
        : [],
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      status: isSet(object.status) ? councelingStatusFromJSON(object.status) : 0,
      trialStart: isSet(object.trialStart) ? Number(object.trialStart) : 0,
    };
  },

  toJSON(message: Council): unknown {
    const obj: any = {};
    if (message.cardId !== 0) {
      obj.cardId = Math.round(message.cardId);
    }
    if (message.voters?.length) {
      obj.voters = message.voters;
    }
    if (message.hashResponses?.length) {
      obj.hashResponses = message.hashResponses.map((e) => WrapHashResponse.toJSON(e));
    }
    if (message.clearResponses?.length) {
      obj.clearResponses = message.clearResponses.map((e) => WrapClearResponse.toJSON(e));
    }
    if (message.treasury !== "") {
      obj.treasury = message.treasury;
    }
    if (message.status !== 0) {
      obj.status = councelingStatusToJSON(message.status);
    }
    if (message.trialStart !== 0) {
      obj.trialStart = Math.round(message.trialStart);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Council>, I>>(base?: I): Council {
    return Council.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Council>, I>>(object: I): Council {
    const message = createBaseCouncil();
    message.cardId = object.cardId ?? 0;
    message.voters = object.voters?.map((e) => e) || [];
    message.hashResponses = object.hashResponses?.map((e) => WrapHashResponse.fromPartial(e)) || [];
    message.clearResponses = object.clearResponses?.map((e) => WrapClearResponse.fromPartial(e)) || [];
    message.treasury = object.treasury ?? "";
    message.status = object.status ?? 0;
    message.trialStart = object.trialStart ?? 0;
    return message;
  },
};

function createBaseWrapClearResponse(): WrapClearResponse {
  return { user: "", response: 0, suggestion: "" };
}

export const WrapClearResponse = {
  encode(message: WrapClearResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    if (message.suggestion !== "") {
      writer.uint32(26).string(message.suggestion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WrapClearResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrapClearResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.suggestion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WrapClearResponse {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      response: isSet(object.response) ? responseFromJSON(object.response) : 0,
      suggestion: isSet(object.suggestion) ? String(object.suggestion) : "",
    };
  },

  toJSON(message: WrapClearResponse): unknown {
    const obj: any = {};
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.response !== 0) {
      obj.response = responseToJSON(message.response);
    }
    if (message.suggestion !== "") {
      obj.suggestion = message.suggestion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WrapClearResponse>, I>>(base?: I): WrapClearResponse {
    return WrapClearResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WrapClearResponse>, I>>(object: I): WrapClearResponse {
    const message = createBaseWrapClearResponse();
    message.user = object.user ?? "";
    message.response = object.response ?? 0;
    message.suggestion = object.suggestion ?? "";
    return message;
  },
};

function createBaseWrapHashResponse(): WrapHashResponse {
  return { user: "", hash: "" };
}

export const WrapHashResponse = {
  encode(message: WrapHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WrapHashResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrapHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WrapHashResponse {
    return { user: isSet(object.user) ? String(object.user) : "", hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: WrapHashResponse): unknown {
    const obj: any = {};
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WrapHashResponse>, I>>(base?: I): WrapHashResponse {
    return WrapHashResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WrapHashResponse>, I>>(object: I): WrapHashResponse {
    const message = createBaseWrapHashResponse();
    message.user = object.user ?? "";
    message.hash = object.hash ?? "";
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
