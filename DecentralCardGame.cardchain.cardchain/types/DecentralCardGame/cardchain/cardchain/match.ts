/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SingleVote } from "./voting";

export const protobufPackage = "DecentralCardGame.cardchain.cardchain";

export enum Outcome {
  AWon = 0,
  BWon = 1,
  Draw = 2,
  Aborted = 3,
  UNRECOGNIZED = -1,
}

export function outcomeFromJSON(object: any): Outcome {
  switch (object) {
    case 0:
    case "AWon":
      return Outcome.AWon;
    case 1:
    case "BWon":
      return Outcome.BWon;
    case 2:
    case "Draw":
      return Outcome.Draw;
    case 3:
    case "Aborted":
      return Outcome.Aborted;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Outcome.UNRECOGNIZED;
  }
}

export function outcomeToJSON(object: Outcome): string {
  switch (object) {
    case Outcome.AWon:
      return "AWon";
    case Outcome.BWon:
      return "BWon";
    case Outcome.Draw:
      return "Draw";
    case Outcome.Aborted:
      return "Aborted";
    case Outcome.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Match {
  timestamp: number;
  reporter: string;
  playerA: MatchPlayer | undefined;
  playerB: MatchPlayer | undefined;
  outcome: Outcome;
  coinsDistributed: boolean;
  serverConfirmed: boolean;
}

export interface MatchPlayer {
  addr: string;
  playedCards: number[];
  confirmed: boolean;
  outcome: Outcome;
  deck: number[];
  votedCards: SingleVote[];
}

function createBaseMatch(): Match {
  return {
    timestamp: 0,
    reporter: "",
    playerA: undefined,
    playerB: undefined,
    outcome: 0,
    coinsDistributed: false,
    serverConfirmed: false,
  };
}

export const Match = {
  encode(message: Match, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    if (message.playerA !== undefined) {
      MatchPlayer.encode(message.playerA, writer.uint32(26).fork()).ldelim();
    }
    if (message.playerB !== undefined) {
      MatchPlayer.encode(message.playerB, writer.uint32(34).fork()).ldelim();
    }
    if (message.outcome !== 0) {
      writer.uint32(56).int32(message.outcome);
    }
    if (message.coinsDistributed === true) {
      writer.uint32(80).bool(message.coinsDistributed);
    }
    if (message.serverConfirmed === true) {
      writer.uint32(64).bool(message.serverConfirmed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reporter = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playerA = MatchPlayer.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.playerB = MatchPlayer.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.outcome = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.coinsDistributed = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.serverConfirmed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Match {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      playerA: isSet(object.playerA) ? MatchPlayer.fromJSON(object.playerA) : undefined,
      playerB: isSet(object.playerB) ? MatchPlayer.fromJSON(object.playerB) : undefined,
      outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
      coinsDistributed: isSet(object.coinsDistributed) ? Boolean(object.coinsDistributed) : false,
      serverConfirmed: isSet(object.serverConfirmed) ? Boolean(object.serverConfirmed) : false,
    };
  },

  toJSON(message: Match): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.reporter !== "") {
      obj.reporter = message.reporter;
    }
    if (message.playerA !== undefined) {
      obj.playerA = MatchPlayer.toJSON(message.playerA);
    }
    if (message.playerB !== undefined) {
      obj.playerB = MatchPlayer.toJSON(message.playerB);
    }
    if (message.outcome !== 0) {
      obj.outcome = outcomeToJSON(message.outcome);
    }
    if (message.coinsDistributed === true) {
      obj.coinsDistributed = message.coinsDistributed;
    }
    if (message.serverConfirmed === true) {
      obj.serverConfirmed = message.serverConfirmed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Match>, I>>(base?: I): Match {
    return Match.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Match>, I>>(object: I): Match {
    const message = createBaseMatch();
    message.timestamp = object.timestamp ?? 0;
    message.reporter = object.reporter ?? "";
    message.playerA = (object.playerA !== undefined && object.playerA !== null)
      ? MatchPlayer.fromPartial(object.playerA)
      : undefined;
    message.playerB = (object.playerB !== undefined && object.playerB !== null)
      ? MatchPlayer.fromPartial(object.playerB)
      : undefined;
    message.outcome = object.outcome ?? 0;
    message.coinsDistributed = object.coinsDistributed ?? false;
    message.serverConfirmed = object.serverConfirmed ?? false;
    return message;
  },
};

function createBaseMatchPlayer(): MatchPlayer {
  return { addr: "", playedCards: [], confirmed: false, outcome: 0, deck: [], votedCards: [] };
}

export const MatchPlayer = {
  encode(message: MatchPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    writer.uint32(18).fork();
    for (const v of message.playedCards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.confirmed === true) {
      writer.uint32(24).bool(message.confirmed);
    }
    if (message.outcome !== 0) {
      writer.uint32(32).int32(message.outcome);
    }
    writer.uint32(42).fork();
    for (const v of message.deck) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.votedCards) {
      SingleVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addr = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.playedCards.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCards.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.confirmed = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.outcome = reader.int32() as any;
          continue;
        case 5:
          if (tag === 40) {
            message.deck.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deck.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.votedCards.push(SingleVote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MatchPlayer {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      playedCards: Array.isArray(object?.playedCards) ? object.playedCards.map((e: any) => Number(e)) : [],
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
      outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
      deck: Array.isArray(object?.deck) ? object.deck.map((e: any) => Number(e)) : [],
      votedCards: Array.isArray(object?.votedCards) ? object.votedCards.map((e: any) => SingleVote.fromJSON(e)) : [],
    };
  },

  toJSON(message: MatchPlayer): unknown {
    const obj: any = {};
    if (message.addr !== "") {
      obj.addr = message.addr;
    }
    if (message.playedCards?.length) {
      obj.playedCards = message.playedCards.map((e) => Math.round(e));
    }
    if (message.confirmed === true) {
      obj.confirmed = message.confirmed;
    }
    if (message.outcome !== 0) {
      obj.outcome = outcomeToJSON(message.outcome);
    }
    if (message.deck?.length) {
      obj.deck = message.deck.map((e) => Math.round(e));
    }
    if (message.votedCards?.length) {
      obj.votedCards = message.votedCards.map((e) => SingleVote.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchPlayer>, I>>(base?: I): MatchPlayer {
    return MatchPlayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MatchPlayer>, I>>(object: I): MatchPlayer {
    const message = createBaseMatchPlayer();
    message.addr = object.addr ?? "";
    message.playedCards = object.playedCards?.map((e) => e) || [];
    message.confirmed = object.confirmed ?? false;
    message.outcome = object.outcome ?? 0;
    message.deck = object.deck?.map((e) => e) || [];
    message.votedCards = object.votedCards?.map((e) => SingleVote.fromPartial(e)) || [];
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
