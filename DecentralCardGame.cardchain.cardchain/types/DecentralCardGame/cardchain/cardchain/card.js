/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var Status;
(function (Status) {
    Status[Status["scheme"] = 0] = "scheme";
    Status[Status["prototype"] = 1] = "prototype";
    Status[Status["trial"] = 2] = "trial";
    Status[Status["permanent"] = 3] = "permanent";
    Status[Status["suspended"] = 4] = "suspended";
    Status[Status["banned"] = 5] = "banned";
    Status[Status["bannedSoon"] = 6] = "bannedSoon";
    Status[Status["bannedVerySoon"] = 7] = "bannedVerySoon";
    Status[Status["none"] = 8] = "none";
    Status[Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Status || (Status = {}));
export function statusFromJSON(object) {
    switch (object) {
        case 0:
        case "scheme":
            return Status.scheme;
        case 1:
        case "prototype":
            return Status.prototype;
        case 2:
        case "trial":
            return Status.trial;
        case 3:
        case "permanent":
            return Status.permanent;
        case 4:
        case "suspended":
            return Status.suspended;
        case 5:
        case "banned":
            return Status.banned;
        case 6:
        case "bannedSoon":
            return Status.bannedSoon;
        case 7:
        case "bannedVerySoon":
            return Status.bannedVerySoon;
        case 8:
        case "none":
            return Status.none;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Status.UNRECOGNIZED;
    }
}
export function statusToJSON(object) {
    switch (object) {
        case Status.scheme:
            return "scheme";
        case Status.prototype:
            return "prototype";
        case Status.trial:
            return "trial";
        case Status.permanent:
            return "permanent";
        case Status.suspended:
            return "suspended";
        case Status.banned:
            return "banned";
        case Status.bannedSoon:
            return "bannedSoon";
        case Status.bannedVerySoon:
            return "bannedVerySoon";
        case Status.none:
            return "none";
        case Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var CardRarity;
(function (CardRarity) {
    CardRarity[CardRarity["common"] = 0] = "common";
    CardRarity[CardRarity["uncommon"] = 1] = "uncommon";
    CardRarity[CardRarity["rare"] = 2] = "rare";
    CardRarity[CardRarity["exceptional"] = 3] = "exceptional";
    CardRarity[CardRarity["unique"] = 4] = "unique";
    CardRarity[CardRarity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CardRarity || (CardRarity = {}));
export function cardRarityFromJSON(object) {
    switch (object) {
        case 0:
        case "common":
            return CardRarity.common;
        case 1:
        case "uncommon":
            return CardRarity.uncommon;
        case 2:
        case "rare":
            return CardRarity.rare;
        case 3:
        case "exceptional":
            return CardRarity.exceptional;
        case 4:
        case "unique":
            return CardRarity.unique;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CardRarity.UNRECOGNIZED;
    }
}
export function cardRarityToJSON(object) {
    switch (object) {
        case CardRarity.common:
            return "common";
        case CardRarity.uncommon:
            return "uncommon";
        case CardRarity.rare:
            return "rare";
        case CardRarity.exceptional:
            return "exceptional";
        case CardRarity.unique:
            return "unique";
        case CardRarity.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseCard() {
    return {
        owner: "",
        artist: "",
        content: new Uint8Array(0),
        imageId: 0,
        fullArt: false,
        notes: "",
        status: 0,
        votePool: "",
        voters: [],
        fairEnoughVotes: 0,
        overpoweredVotes: 0,
        underpoweredVotes: 0,
        inappropriateVotes: 0,
        nerflevel: 0,
        balanceAnchor: false,
        starterCard: false,
        rarity: 0,
    };
}
export const Card = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.artist !== "") {
            writer.uint32(18).string(message.artist);
        }
        if (message.content.length !== 0) {
            writer.uint32(26).bytes(message.content);
        }
        if (message.imageId !== 0) {
            writer.uint32(32).uint64(message.imageId);
        }
        if (message.fullArt === true) {
            writer.uint32(40).bool(message.fullArt);
        }
        if (message.notes !== "") {
            writer.uint32(50).string(message.notes);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.votePool !== "") {
            writer.uint32(66).string(message.votePool);
        }
        for (const v of message.voters) {
            writer.uint32(114).string(v);
        }
        if (message.fairEnoughVotes !== 0) {
            writer.uint32(72).uint64(message.fairEnoughVotes);
        }
        if (message.overpoweredVotes !== 0) {
            writer.uint32(80).uint64(message.overpoweredVotes);
        }
        if (message.underpoweredVotes !== 0) {
            writer.uint32(88).uint64(message.underpoweredVotes);
        }
        if (message.inappropriateVotes !== 0) {
            writer.uint32(96).uint64(message.inappropriateVotes);
        }
        if (message.nerflevel !== 0) {
            writer.uint32(104).int64(message.nerflevel);
        }
        if (message.balanceAnchor === true) {
            writer.uint32(120).bool(message.balanceAnchor);
        }
        if (message.starterCard === true) {
            writer.uint32(128).bool(message.starterCard);
        }
        if (message.rarity !== 0) {
            writer.uint32(136).int32(message.rarity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.artist = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.imageId = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.fullArt = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.notes = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.votePool = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.voters.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.fairEnoughVotes = longToNumber(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.overpoweredVotes = longToNumber(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.underpoweredVotes = longToNumber(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.inappropriateVotes = longToNumber(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.nerflevel = longToNumber(reader.int64());
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.balanceAnchor = reader.bool();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.starterCard = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.rarity = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            artist: isSet(object.artist) ? String(object.artist) : "",
            content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0),
            imageId: isSet(object.imageId) ? Number(object.imageId) : 0,
            fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
            notes: isSet(object.notes) ? String(object.notes) : "",
            status: isSet(object.status) ? statusFromJSON(object.status) : 0,
            votePool: isSet(object.votePool) ? String(object.votePool) : "",
            voters: Array.isArray(object?.voters) ? object.voters.map((e) => String(e)) : [],
            fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
            overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
            underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
            inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
            nerflevel: isSet(object.nerflevel) ? Number(object.nerflevel) : 0,
            balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
            starterCard: isSet(object.starterCard) ? Boolean(object.starterCard) : false,
            rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.artist !== "") {
            obj.artist = message.artist;
        }
        if (message.content.length !== 0) {
            obj.content = base64FromBytes(message.content);
        }
        if (message.imageId !== 0) {
            obj.imageId = Math.round(message.imageId);
        }
        if (message.fullArt === true) {
            obj.fullArt = message.fullArt;
        }
        if (message.notes !== "") {
            obj.notes = message.notes;
        }
        if (message.status !== 0) {
            obj.status = statusToJSON(message.status);
        }
        if (message.votePool !== "") {
            obj.votePool = message.votePool;
        }
        if (message.voters?.length) {
            obj.voters = message.voters;
        }
        if (message.fairEnoughVotes !== 0) {
            obj.fairEnoughVotes = Math.round(message.fairEnoughVotes);
        }
        if (message.overpoweredVotes !== 0) {
            obj.overpoweredVotes = Math.round(message.overpoweredVotes);
        }
        if (message.underpoweredVotes !== 0) {
            obj.underpoweredVotes = Math.round(message.underpoweredVotes);
        }
        if (message.inappropriateVotes !== 0) {
            obj.inappropriateVotes = Math.round(message.inappropriateVotes);
        }
        if (message.nerflevel !== 0) {
            obj.nerflevel = Math.round(message.nerflevel);
        }
        if (message.balanceAnchor === true) {
            obj.balanceAnchor = message.balanceAnchor;
        }
        if (message.starterCard === true) {
            obj.starterCard = message.starterCard;
        }
        if (message.rarity !== 0) {
            obj.rarity = cardRarityToJSON(message.rarity);
        }
        return obj;
    },
    create(base) {
        return Card.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCard();
        message.owner = object.owner ?? "";
        message.artist = object.artist ?? "";
        message.content = object.content ?? new Uint8Array(0);
        message.imageId = object.imageId ?? 0;
        message.fullArt = object.fullArt ?? false;
        message.notes = object.notes ?? "";
        message.status = object.status ?? 0;
        message.votePool = object.votePool ?? "";
        message.voters = object.voters?.map((e) => e) || [];
        message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
        message.overpoweredVotes = object.overpoweredVotes ?? 0;
        message.underpoweredVotes = object.underpoweredVotes ?? 0;
        message.inappropriateVotes = object.inappropriateVotes ?? 0;
        message.nerflevel = object.nerflevel ?? 0;
        message.balanceAnchor = object.balanceAnchor ?? false;
        message.starterCard = object.starterCard ?? false;
        message.rarity = object.rarity ?? 0;
        return message;
    },
};
function createBaseOutpCard() {
    return {
        owner: "",
        artist: "",
        content: "",
        image: "",
        fullArt: false,
        notes: "",
        status: 0,
        votePool: "",
        voters: [],
        fairEnoughVotes: 0,
        overpoweredVotes: 0,
        underpoweredVotes: 0,
        inappropriateVotes: 0,
        nerflevel: 0,
        balanceAnchor: false,
        hash: "",
        starterCard: false,
        rarity: 0,
    };
}
export const OutpCard = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.artist !== "") {
            writer.uint32(18).string(message.artist);
        }
        if (message.content !== "") {
            writer.uint32(26).string(message.content);
        }
        if (message.image !== "") {
            writer.uint32(34).string(message.image);
        }
        if (message.fullArt === true) {
            writer.uint32(40).bool(message.fullArt);
        }
        if (message.notes !== "") {
            writer.uint32(50).string(message.notes);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.votePool !== "") {
            writer.uint32(66).string(message.votePool);
        }
        for (const v of message.voters) {
            writer.uint32(114).string(v);
        }
        if (message.fairEnoughVotes !== 0) {
            writer.uint32(72).uint64(message.fairEnoughVotes);
        }
        if (message.overpoweredVotes !== 0) {
            writer.uint32(80).uint64(message.overpoweredVotes);
        }
        if (message.underpoweredVotes !== 0) {
            writer.uint32(88).uint64(message.underpoweredVotes);
        }
        if (message.inappropriateVotes !== 0) {
            writer.uint32(96).uint64(message.inappropriateVotes);
        }
        if (message.nerflevel !== 0) {
            writer.uint32(104).int64(message.nerflevel);
        }
        if (message.balanceAnchor === true) {
            writer.uint32(120).bool(message.balanceAnchor);
        }
        if (message.hash !== "") {
            writer.uint32(130).string(message.hash);
        }
        if (message.starterCard === true) {
            writer.uint32(136).bool(message.starterCard);
        }
        if (message.rarity !== 0) {
            writer.uint32(144).int32(message.rarity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutpCard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.artist = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.image = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.fullArt = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.notes = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.votePool = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.voters.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.fairEnoughVotes = longToNumber(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.overpoweredVotes = longToNumber(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.underpoweredVotes = longToNumber(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.inappropriateVotes = longToNumber(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.nerflevel = longToNumber(reader.int64());
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.balanceAnchor = reader.bool();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.starterCard = reader.bool();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.rarity = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            artist: isSet(object.artist) ? String(object.artist) : "",
            content: isSet(object.content) ? String(object.content) : "",
            image: isSet(object.image) ? String(object.image) : "",
            fullArt: isSet(object.fullArt) ? Boolean(object.fullArt) : false,
            notes: isSet(object.notes) ? String(object.notes) : "",
            status: isSet(object.status) ? statusFromJSON(object.status) : 0,
            votePool: isSet(object.votePool) ? String(object.votePool) : "",
            voters: Array.isArray(object?.voters) ? object.voters.map((e) => String(e)) : [],
            fairEnoughVotes: isSet(object.fairEnoughVotes) ? Number(object.fairEnoughVotes) : 0,
            overpoweredVotes: isSet(object.overpoweredVotes) ? Number(object.overpoweredVotes) : 0,
            underpoweredVotes: isSet(object.underpoweredVotes) ? Number(object.underpoweredVotes) : 0,
            inappropriateVotes: isSet(object.inappropriateVotes) ? Number(object.inappropriateVotes) : 0,
            nerflevel: isSet(object.nerflevel) ? Number(object.nerflevel) : 0,
            balanceAnchor: isSet(object.balanceAnchor) ? Boolean(object.balanceAnchor) : false,
            hash: isSet(object.hash) ? String(object.hash) : "",
            starterCard: isSet(object.starterCard) ? Boolean(object.starterCard) : false,
            rarity: isSet(object.rarity) ? cardRarityFromJSON(object.rarity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.artist !== "") {
            obj.artist = message.artist;
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        if (message.image !== "") {
            obj.image = message.image;
        }
        if (message.fullArt === true) {
            obj.fullArt = message.fullArt;
        }
        if (message.notes !== "") {
            obj.notes = message.notes;
        }
        if (message.status !== 0) {
            obj.status = statusToJSON(message.status);
        }
        if (message.votePool !== "") {
            obj.votePool = message.votePool;
        }
        if (message.voters?.length) {
            obj.voters = message.voters;
        }
        if (message.fairEnoughVotes !== 0) {
            obj.fairEnoughVotes = Math.round(message.fairEnoughVotes);
        }
        if (message.overpoweredVotes !== 0) {
            obj.overpoweredVotes = Math.round(message.overpoweredVotes);
        }
        if (message.underpoweredVotes !== 0) {
            obj.underpoweredVotes = Math.round(message.underpoweredVotes);
        }
        if (message.inappropriateVotes !== 0) {
            obj.inappropriateVotes = Math.round(message.inappropriateVotes);
        }
        if (message.nerflevel !== 0) {
            obj.nerflevel = Math.round(message.nerflevel);
        }
        if (message.balanceAnchor === true) {
            obj.balanceAnchor = message.balanceAnchor;
        }
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        if (message.starterCard === true) {
            obj.starterCard = message.starterCard;
        }
        if (message.rarity !== 0) {
            obj.rarity = cardRarityToJSON(message.rarity);
        }
        return obj;
    },
    create(base) {
        return OutpCard.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOutpCard();
        message.owner = object.owner ?? "";
        message.artist = object.artist ?? "";
        message.content = object.content ?? "";
        message.image = object.image ?? "";
        message.fullArt = object.fullArt ?? false;
        message.notes = object.notes ?? "";
        message.status = object.status ?? 0;
        message.votePool = object.votePool ?? "";
        message.voters = object.voters?.map((e) => e) || [];
        message.fairEnoughVotes = object.fairEnoughVotes ?? 0;
        message.overpoweredVotes = object.overpoweredVotes ?? 0;
        message.underpoweredVotes = object.underpoweredVotes ?? 0;
        message.inappropriateVotes = object.inappropriateVotes ?? 0;
        message.nerflevel = object.nerflevel ?? 0;
        message.balanceAnchor = object.balanceAnchor ?? false;
        message.hash = object.hash ?? "";
        message.starterCard = object.starterCard ?? false;
        message.rarity = object.rarity ?? 0;
        return message;
    },
};
function createBaseTimeStamp() {
    return { timeStamp: 0 };
}
export const TimeStamp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timeStamp !== 0) {
            writer.uint32(8).uint64(message.timeStamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeStamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timeStamp = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { timeStamp: isSet(object.timeStamp) ? Number(object.timeStamp) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeStamp !== 0) {
            obj.timeStamp = Math.round(message.timeStamp);
        }
        return obj;
    },
    create(base) {
        return TimeStamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimeStamp();
        message.timeStamp = object.timeStamp ?? 0;
        return message;
    },
};
const tsProtoGlobalThis = (() => {
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
