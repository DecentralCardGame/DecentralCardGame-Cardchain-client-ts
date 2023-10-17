/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutpCard } from "./card";
import { Council } from "./council";
import { Match, outcomeFromJSON, outcomeToJSON } from "./match";
import { Params } from "./params";
import { SellOffer, sellOfferStatusFromJSON, sellOfferStatusToJSON } from "./sell_offer";
import { Server } from "./server";
import { cStatusFromJSON, cStatusToJSON, OutpSet } from "./set";
import { User } from "./user";
import { VoteRight, VotingResults } from "./voting";
export const protobufPackage = "DecentralCardGame.cardchain.cardchain";
export var QueryQCardsRequest_Status;
(function (QueryQCardsRequest_Status) {
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["scheme"] = 0] = "scheme";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["prototype"] = 1] = "prototype";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["trial"] = 2] = "trial";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["permanent"] = 3] = "permanent";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["suspended"] = 4] = "suspended";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["banned"] = 5] = "banned";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["bannedSoon"] = 6] = "bannedSoon";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["bannedVerySoon"] = 7] = "bannedVerySoon";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["none"] = 8] = "none";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["playable"] = 9] = "playable";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["unplayable"] = 10] = "unplayable";
    QueryQCardsRequest_Status[QueryQCardsRequest_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(QueryQCardsRequest_Status || (QueryQCardsRequest_Status = {}));
export function queryQCardsRequest_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "scheme":
            return QueryQCardsRequest_Status.scheme;
        case 1:
        case "prototype":
            return QueryQCardsRequest_Status.prototype;
        case 2:
        case "trial":
            return QueryQCardsRequest_Status.trial;
        case 3:
        case "permanent":
            return QueryQCardsRequest_Status.permanent;
        case 4:
        case "suspended":
            return QueryQCardsRequest_Status.suspended;
        case 5:
        case "banned":
            return QueryQCardsRequest_Status.banned;
        case 6:
        case "bannedSoon":
            return QueryQCardsRequest_Status.bannedSoon;
        case 7:
        case "bannedVerySoon":
            return QueryQCardsRequest_Status.bannedVerySoon;
        case 8:
        case "none":
            return QueryQCardsRequest_Status.none;
        case 9:
        case "playable":
            return QueryQCardsRequest_Status.playable;
        case 10:
        case "unplayable":
            return QueryQCardsRequest_Status.unplayable;
        case -1:
        case "UNRECOGNIZED":
        default:
            return QueryQCardsRequest_Status.UNRECOGNIZED;
    }
}
export function queryQCardsRequest_StatusToJSON(object) {
    switch (object) {
        case QueryQCardsRequest_Status.scheme:
            return "scheme";
        case QueryQCardsRequest_Status.prototype:
            return "prototype";
        case QueryQCardsRequest_Status.trial:
            return "trial";
        case QueryQCardsRequest_Status.permanent:
            return "permanent";
        case QueryQCardsRequest_Status.suspended:
            return "suspended";
        case QueryQCardsRequest_Status.banned:
            return "banned";
        case QueryQCardsRequest_Status.bannedSoon:
            return "bannedSoon";
        case QueryQCardsRequest_Status.bannedVerySoon:
            return "bannedVerySoon";
        case QueryQCardsRequest_Status.none:
            return "none";
        case QueryQCardsRequest_Status.playable:
            return "playable";
        case QueryQCardsRequest_Status.unplayable:
            return "unplayable";
        case QueryQCardsRequest_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryQCardRequest() {
    return { cardId: "" };
}
export const QueryQCardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== "") {
            writer.uint32(10).string(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { cardId: isSet(object.cardId) ? String(object.cardId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = message.cardId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardRequest();
        message.cardId = object.cardId ?? "";
        return message;
    },
};
function createBaseQueryQCardContentRequest() {
    return { cardId: "" };
}
export const QueryQCardContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardId !== "") {
            writer.uint32(10).string(message.cardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardContentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { cardId: isSet(object.cardId) ? String(object.cardId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.cardId !== undefined && (obj.cardId = message.cardId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardContentRequest();
        message.cardId = object.cardId ?? "";
        return message;
    },
};
function createBaseQueryQCardContentResponse() {
    return { content: "", hash: "" };
}
export const QueryQCardContentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== "") {
            writer.uint32(10).string(message.content);
        }
        if (message.hash !== "") {
            writer.uint32(18).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardContentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            content: isSet(object.content) ? String(object.content) : "",
            hash: isSet(object.hash) ? String(object.hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content);
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardContentResponse();
        message.content = object.content ?? "";
        message.hash = object.hash ?? "";
        return message;
    },
};
function createBaseQueryQUserRequest() {
    return { address: "" };
}
export const QueryQUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQUserRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryQCardchainInfoRequest() {
    return {};
}
export const QueryQCardchainInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardchainInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryQCardchainInfoRequest();
        return message;
    },
};
function createBaseQueryQCardchainInfoResponse() {
    return {
        cardAuctionPrice: "",
        activeSets: [],
        cardsNumber: 0,
        matchesNumber: 0,
        sellOffersNumber: 0,
        councilsNumber: 0,
        lastCardModified: 0,
    };
}
export const QueryQCardchainInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cardAuctionPrice !== "") {
            writer.uint32(10).string(message.cardAuctionPrice);
        }
        writer.uint32(18).fork();
        for (const v of message.activeSets) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.cardsNumber !== 0) {
            writer.uint32(24).uint64(message.cardsNumber);
        }
        if (message.matchesNumber !== 0) {
            writer.uint32(32).uint64(message.matchesNumber);
        }
        if (message.sellOffersNumber !== 0) {
            writer.uint32(40).uint64(message.sellOffersNumber);
        }
        if (message.councilsNumber !== 0) {
            writer.uint32(48).uint64(message.councilsNumber);
        }
        if (message.lastCardModified !== 0) {
            writer.uint32(56).uint64(message.lastCardModified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardchainInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cardAuctionPrice = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.activeSets.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.activeSets.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 3:
                    message.cardsNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.matchesNumber = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sellOffersNumber = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.councilsNumber = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.lastCardModified = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            cardAuctionPrice: isSet(object.cardAuctionPrice) ? String(object.cardAuctionPrice) : "",
            activeSets: Array.isArray(object?.activeSets) ? object.activeSets.map((e) => Number(e)) : [],
            cardsNumber: isSet(object.cardsNumber) ? Number(object.cardsNumber) : 0,
            matchesNumber: isSet(object.matchesNumber) ? Number(object.matchesNumber) : 0,
            sellOffersNumber: isSet(object.sellOffersNumber) ? Number(object.sellOffersNumber) : 0,
            councilsNumber: isSet(object.councilsNumber) ? Number(object.councilsNumber) : 0,
            lastCardModified: isSet(object.lastCardModified) ? Number(object.lastCardModified) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.cardAuctionPrice !== undefined && (obj.cardAuctionPrice = message.cardAuctionPrice);
        if (message.activeSets) {
            obj.activeSets = message.activeSets.map((e) => Math.round(e));
        }
        else {
            obj.activeSets = [];
        }
        message.cardsNumber !== undefined && (obj.cardsNumber = Math.round(message.cardsNumber));
        message.matchesNumber !== undefined && (obj.matchesNumber = Math.round(message.matchesNumber));
        message.sellOffersNumber !== undefined && (obj.sellOffersNumber = Math.round(message.sellOffersNumber));
        message.councilsNumber !== undefined && (obj.councilsNumber = Math.round(message.councilsNumber));
        message.lastCardModified !== undefined && (obj.lastCardModified = Math.round(message.lastCardModified));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardchainInfoResponse();
        message.cardAuctionPrice = object.cardAuctionPrice ?? "";
        message.activeSets = object.activeSets?.map((e) => e) || [];
        message.cardsNumber = object.cardsNumber ?? 0;
        message.matchesNumber = object.matchesNumber ?? 0;
        message.sellOffersNumber = object.sellOffersNumber ?? 0;
        message.councilsNumber = object.councilsNumber ?? 0;
        message.lastCardModified = object.lastCardModified ?? 0;
        return message;
    },
};
function createBaseQueryQVotingResultsRequest() {
    return {};
}
export const QueryQVotingResultsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotingResultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryQVotingResultsRequest();
        return message;
    },
};
function createBaseQueryQVotingResultsResponse() {
    return { lastVotingResults: undefined };
}
export const QueryQVotingResultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lastVotingResults !== undefined) {
            VotingResults.encode(message.lastVotingResults, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotingResultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastVotingResults = VotingResults.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lastVotingResults: isSet(object.lastVotingResults) ? VotingResults.fromJSON(object.lastVotingResults) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastVotingResults !== undefined && (obj.lastVotingResults = message.lastVotingResults
            ? VotingResults.toJSON(message.lastVotingResults)
            : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQVotingResultsResponse();
        message.lastVotingResults = (object.lastVotingResults !== undefined && object.lastVotingResults !== null)
            ? VotingResults.fromPartial(object.lastVotingResults)
            : undefined;
        return message;
    },
};
function createBaseQueryQVotableCardsRequest() {
    return { address: "" };
}
export const QueryQVotableCardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotableCardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQVotableCardsRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryQVotableCardsResponse() {
    return { unregistered: false, noVoteRights: false, voteRights: [] };
}
export const QueryQVotableCardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unregistered === true) {
            writer.uint32(8).bool(message.unregistered);
        }
        if (message.noVoteRights === true) {
            writer.uint32(16).bool(message.noVoteRights);
        }
        for (const v of message.voteRights) {
            VoteRight.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQVotableCardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unregistered = reader.bool();
                    break;
                case 2:
                    message.noVoteRights = reader.bool();
                    break;
                case 3:
                    message.voteRights.push(VoteRight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            unregistered: isSet(object.unregistered) ? Boolean(object.unregistered) : false,
            noVoteRights: isSet(object.noVoteRights) ? Boolean(object.noVoteRights) : false,
            voteRights: Array.isArray(object?.voteRights) ? object.voteRights.map((e) => VoteRight.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.unregistered !== undefined && (obj.unregistered = message.unregistered);
        message.noVoteRights !== undefined && (obj.noVoteRights = message.noVoteRights);
        if (message.voteRights) {
            obj.voteRights = message.voteRights.map((e) => e ? VoteRight.toJSON(e) : undefined);
        }
        else {
            obj.voteRights = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQVotableCardsResponse();
        message.unregistered = object.unregistered ?? false;
        message.noVoteRights = object.noVoteRights ?? false;
        message.voteRights = object.voteRights?.map((e) => VoteRight.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQCardsRequest() {
    return {
        owner: "",
        status: 0,
        cardType: "",
        classes: "",
        sortBy: "",
        nameContains: "",
        keywordsContains: "",
        notesContains: "",
        onlyStarterCard: false,
    };
}
export const QueryQCardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.cardType !== "") {
            writer.uint32(26).string(message.cardType);
        }
        if (message.classes !== "") {
            writer.uint32(34).string(message.classes);
        }
        if (message.sortBy !== "") {
            writer.uint32(42).string(message.sortBy);
        }
        if (message.nameContains !== "") {
            writer.uint32(50).string(message.nameContains);
        }
        if (message.keywordsContains !== "") {
            writer.uint32(58).string(message.keywordsContains);
        }
        if (message.notesContains !== "") {
            writer.uint32(66).string(message.notesContains);
        }
        if (message.onlyStarterCard === true) {
            writer.uint32(72).bool(message.onlyStarterCard);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.cardType = reader.string();
                    break;
                case 4:
                    message.classes = reader.string();
                    break;
                case 5:
                    message.sortBy = reader.string();
                    break;
                case 6:
                    message.nameContains = reader.string();
                    break;
                case 7:
                    message.keywordsContains = reader.string();
                    break;
                case 8:
                    message.notesContains = reader.string();
                    break;
                case 9:
                    message.onlyStarterCard = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            status: isSet(object.status) ? queryQCardsRequest_StatusFromJSON(object.status) : 0,
            cardType: isSet(object.cardType) ? String(object.cardType) : "",
            classes: isSet(object.classes) ? String(object.classes) : "",
            sortBy: isSet(object.sortBy) ? String(object.sortBy) : "",
            nameContains: isSet(object.nameContains) ? String(object.nameContains) : "",
            keywordsContains: isSet(object.keywordsContains) ? String(object.keywordsContains) : "",
            notesContains: isSet(object.notesContains) ? String(object.notesContains) : "",
            onlyStarterCard: isSet(object.onlyStarterCard) ? Boolean(object.onlyStarterCard) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.status !== undefined && (obj.status = queryQCardsRequest_StatusToJSON(message.status));
        message.cardType !== undefined && (obj.cardType = message.cardType);
        message.classes !== undefined && (obj.classes = message.classes);
        message.sortBy !== undefined && (obj.sortBy = message.sortBy);
        message.nameContains !== undefined && (obj.nameContains = message.nameContains);
        message.keywordsContains !== undefined && (obj.keywordsContains = message.keywordsContains);
        message.notesContains !== undefined && (obj.notesContains = message.notesContains);
        message.onlyStarterCard !== undefined && (obj.onlyStarterCard = message.onlyStarterCard);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardsRequest();
        message.owner = object.owner ?? "";
        message.status = object.status ?? 0;
        message.cardType = object.cardType ?? "";
        message.classes = object.classes ?? "";
        message.sortBy = object.sortBy ?? "";
        message.nameContains = object.nameContains ?? "";
        message.keywordsContains = object.keywordsContains ?? "";
        message.notesContains = object.notesContains ?? "";
        message.onlyStarterCard = object.onlyStarterCard ?? false;
        return message;
    },
};
function createBaseQueryQCardsResponse() {
    return { cardsList: [] };
}
export const QueryQCardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.cardsList) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsList.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsList.push(longToNumber(reader.uint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { cardsList: Array.isArray(object?.cardsList) ? object.cardsList.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.cardsList) {
            obj.cardsList = message.cardsList.map((e) => Math.round(e));
        }
        else {
            obj.cardsList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCardsResponse();
        message.cardsList = object.cardsList?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryQMatchRequest() {
    return { matchId: 0 };
}
export const QueryQMatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.matchId !== 0) {
            writer.uint32(8).uint64(message.matchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { matchId: isSet(object.matchId) ? Number(object.matchId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQMatchRequest();
        message.matchId = object.matchId ?? 0;
        return message;
    },
};
function createBaseQueryQSetRequest() {
    return { setId: 0 };
}
export const QueryQSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.setId !== 0) {
            writer.uint32(8).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.setId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetRequest();
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseQueryQSellOfferRequest() {
    return { sellOfferId: 0 };
}
export const QueryQSellOfferRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sellOfferId !== 0) {
            writer.uint32(8).uint64(message.sellOfferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOfferRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOfferId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { sellOfferId: isSet(object.sellOfferId) ? Number(object.sellOfferId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.sellOfferId !== undefined && (obj.sellOfferId = Math.round(message.sellOfferId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOfferRequest();
        message.sellOfferId = object.sellOfferId ?? 0;
        return message;
    },
};
function createBaseQueryQCouncilRequest() {
    return { councilId: 0 };
}
export const QueryQCouncilRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.councilId !== 0) {
            writer.uint32(8).uint64(message.councilId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQCouncilRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.councilId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { councilId: isSet(object.councilId) ? Number(object.councilId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.councilId !== undefined && (obj.councilId = Math.round(message.councilId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQCouncilRequest();
        message.councilId = object.councilId ?? 0;
        return message;
    },
};
function createBaseQueryQMatchesRequest() {
    return {
        timestampDown: 0,
        timestampUp: 0,
        containsUsers: [],
        reporter: "",
        outcome: 0,
        cardsPlayed: [],
        ignore: undefined,
    };
}
export const QueryQMatchesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestampDown !== 0) {
            writer.uint32(8).uint64(message.timestampDown);
        }
        if (message.timestampUp !== 0) {
            writer.uint32(16).uint64(message.timestampUp);
        }
        for (const v of message.containsUsers) {
            writer.uint32(26).string(v);
        }
        if (message.reporter !== "") {
            writer.uint32(34).string(message.reporter);
        }
        if (message.outcome !== 0) {
            writer.uint32(40).int32(message.outcome);
        }
        writer.uint32(50).fork();
        for (const v of message.cardsPlayed) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.ignore !== undefined) {
            IgnoreMatches.encode(message.ignore, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestampDown = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.timestampUp = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.containsUsers.push(reader.string());
                    break;
                case 4:
                    message.reporter = reader.string();
                    break;
                case 5:
                    message.outcome = reader.int32();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.cardsPlayed.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.cardsPlayed.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 7:
                    message.ignore = IgnoreMatches.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            timestampDown: isSet(object.timestampDown) ? Number(object.timestampDown) : 0,
            timestampUp: isSet(object.timestampUp) ? Number(object.timestampUp) : 0,
            containsUsers: Array.isArray(object?.containsUsers) ? object.containsUsers.map((e) => String(e)) : [],
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
            outcome: isSet(object.outcome) ? outcomeFromJSON(object.outcome) : 0,
            cardsPlayed: Array.isArray(object?.cardsPlayed) ? object.cardsPlayed.map((e) => Number(e)) : [],
            ignore: isSet(object.ignore) ? IgnoreMatches.fromJSON(object.ignore) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestampDown !== undefined && (obj.timestampDown = Math.round(message.timestampDown));
        message.timestampUp !== undefined && (obj.timestampUp = Math.round(message.timestampUp));
        if (message.containsUsers) {
            obj.containsUsers = message.containsUsers.map((e) => e);
        }
        else {
            obj.containsUsers = [];
        }
        message.reporter !== undefined && (obj.reporter = message.reporter);
        message.outcome !== undefined && (obj.outcome = outcomeToJSON(message.outcome));
        if (message.cardsPlayed) {
            obj.cardsPlayed = message.cardsPlayed.map((e) => Math.round(e));
        }
        else {
            obj.cardsPlayed = [];
        }
        message.ignore !== undefined && (obj.ignore = message.ignore ? IgnoreMatches.toJSON(message.ignore) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQMatchesRequest();
        message.timestampDown = object.timestampDown ?? 0;
        message.timestampUp = object.timestampUp ?? 0;
        message.containsUsers = object.containsUsers?.map((e) => e) || [];
        message.reporter = object.reporter ?? "";
        message.outcome = object.outcome ?? 0;
        message.cardsPlayed = object.cardsPlayed?.map((e) => e) || [];
        message.ignore = (object.ignore !== undefined && object.ignore !== null)
            ? IgnoreMatches.fromPartial(object.ignore)
            : undefined;
        return message;
    },
};
function createBaseIgnoreMatches() {
    return { outcome: false };
}
export const IgnoreMatches = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.outcome === true) {
            writer.uint32(8).bool(message.outcome);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIgnoreMatches();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outcome = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { outcome: isSet(object.outcome) ? Boolean(object.outcome) : false };
    },
    toJSON(message) {
        const obj = {};
        message.outcome !== undefined && (obj.outcome = message.outcome);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIgnoreMatches();
        message.outcome = object.outcome ?? false;
        return message;
    },
};
function createBaseQueryQMatchesResponse() {
    return { matchesList: [], matches: [] };
}
export const QueryQMatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.matchesList) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.matches) {
            Match.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQMatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.matchesList.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.matchesList.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.matches.push(Match.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            matchesList: Array.isArray(object?.matchesList) ? object.matchesList.map((e) => Number(e)) : [],
            matches: Array.isArray(object?.matches) ? object.matches.map((e) => Match.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.matchesList) {
            obj.matchesList = message.matchesList.map((e) => Math.round(e));
        }
        else {
            obj.matchesList = [];
        }
        if (message.matches) {
            obj.matches = message.matches.map((e) => e ? Match.toJSON(e) : undefined);
        }
        else {
            obj.matches = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQMatchesResponse();
        message.matchesList = object.matchesList?.map((e) => e) || [];
        message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQSellOffersRequest() {
    return { priceDown: "", priceUp: "", seller: "", buyer: "", card: 0, status: 0, ignore: undefined };
}
export const QueryQSellOffersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceDown !== "") {
            writer.uint32(10).string(message.priceDown);
        }
        if (message.priceUp !== "") {
            writer.uint32(18).string(message.priceUp);
        }
        if (message.seller !== "") {
            writer.uint32(26).string(message.seller);
        }
        if (message.buyer !== "") {
            writer.uint32(34).string(message.buyer);
        }
        if (message.card !== 0) {
            writer.uint32(40).uint64(message.card);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.ignore !== undefined) {
            IgnoreSellOffers.encode(message.ignore, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOffersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDown = reader.string();
                    break;
                case 2:
                    message.priceUp = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                case 4:
                    message.buyer = reader.string();
                    break;
                case 5:
                    message.card = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.ignore = IgnoreSellOffers.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            priceDown: isSet(object.priceDown) ? String(object.priceDown) : "",
            priceUp: isSet(object.priceUp) ? String(object.priceUp) : "",
            seller: isSet(object.seller) ? String(object.seller) : "",
            buyer: isSet(object.buyer) ? String(object.buyer) : "",
            card: isSet(object.card) ? Number(object.card) : 0,
            status: isSet(object.status) ? sellOfferStatusFromJSON(object.status) : 0,
            ignore: isSet(object.ignore) ? IgnoreSellOffers.fromJSON(object.ignore) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceDown !== undefined && (obj.priceDown = message.priceDown);
        message.priceUp !== undefined && (obj.priceUp = message.priceUp);
        message.seller !== undefined && (obj.seller = message.seller);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        message.card !== undefined && (obj.card = Math.round(message.card));
        message.status !== undefined && (obj.status = sellOfferStatusToJSON(message.status));
        message.ignore !== undefined && (obj.ignore = message.ignore ? IgnoreSellOffers.toJSON(message.ignore) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOffersRequest();
        message.priceDown = object.priceDown ?? "";
        message.priceUp = object.priceUp ?? "";
        message.seller = object.seller ?? "";
        message.buyer = object.buyer ?? "";
        message.card = object.card ?? 0;
        message.status = object.status ?? 0;
        message.ignore = (object.ignore !== undefined && object.ignore !== null)
            ? IgnoreSellOffers.fromPartial(object.ignore)
            : undefined;
        return message;
    },
};
function createBaseIgnoreSellOffers() {
    return { status: false, card: false };
}
export const IgnoreSellOffers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status === true) {
            writer.uint32(8).bool(message.status);
        }
        if (message.card === true) {
            writer.uint32(16).bool(message.card);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIgnoreSellOffers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.bool();
                    break;
                case 2:
                    message.card = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? Boolean(object.status) : false,
            card: isSet(object.card) ? Boolean(object.card) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.card !== undefined && (obj.card = message.card);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIgnoreSellOffers();
        message.status = object.status ?? false;
        message.card = object.card ?? false;
        return message;
    },
};
function createBaseQueryQSellOffersResponse() {
    return { sellOffersIds: [], sellOffers: [] };
}
export const QueryQSellOffersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sellOffersIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.sellOffers) {
            SellOffer.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSellOffersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sellOffersIds.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.sellOffersIds.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 2:
                    message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sellOffersIds: Array.isArray(object?.sellOffersIds) ? object.sellOffersIds.map((e) => Number(e)) : [],
            sellOffers: Array.isArray(object?.sellOffers) ? object.sellOffers.map((e) => SellOffer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sellOffersIds) {
            obj.sellOffersIds = message.sellOffersIds.map((e) => Math.round(e));
        }
        else {
            obj.sellOffersIds = [];
        }
        if (message.sellOffers) {
            obj.sellOffers = message.sellOffers.map((e) => e ? SellOffer.toJSON(e) : undefined);
        }
        else {
            obj.sellOffers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSellOffersResponse();
        message.sellOffersIds = object.sellOffersIds?.map((e) => e) || [];
        message.sellOffers = object.sellOffers?.map((e) => SellOffer.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryQServerRequest() {
    return { id: 0 };
}
export const QueryQServerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQServerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQServerRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryQServerResponse() {
    return {};
}
export const QueryQServerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQServerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryQServerResponse();
        return message;
    },
};
function createBaseQueryQSetsRequest() {
    return { status: 0, ignoreStatus: false, contributors: [], containsCards: [], owner: "" };
}
export const QueryQSetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.ignoreStatus === true) {
            writer.uint32(16).bool(message.ignoreStatus);
        }
        for (const v of message.contributors) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.containsCards) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.ignoreStatus = reader.bool();
                    break;
                case 3:
                    message.contributors.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.containsCards.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.containsCards.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? cStatusFromJSON(object.status) : 0,
            ignoreStatus: isSet(object.ignoreStatus) ? Boolean(object.ignoreStatus) : false,
            contributors: Array.isArray(object?.contributors) ? object.contributors.map((e) => String(e)) : [],
            containsCards: Array.isArray(object?.containsCards) ? object.containsCards.map((e) => Number(e)) : [],
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = cStatusToJSON(message.status));
        message.ignoreStatus !== undefined && (obj.ignoreStatus = message.ignoreStatus);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e);
        }
        else {
            obj.contributors = [];
        }
        if (message.containsCards) {
            obj.containsCards = message.containsCards.map((e) => Math.round(e));
        }
        else {
            obj.containsCards = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetsRequest();
        message.status = object.status ?? 0;
        message.ignoreStatus = object.ignoreStatus ?? false;
        message.contributors = object.contributors?.map((e) => e) || [];
        message.containsCards = object.containsCards?.map((e) => e) || [];
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseQueryQSetsResponse() {
    return { setIds: [] };
}
export const QueryQSetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.setIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryQSetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.setIds.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.setIds.push(longToNumber(reader.uint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { setIds: Array.isArray(object?.setIds) ? object.setIds.map((e) => Number(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.setIds) {
            obj.setIds = message.setIds.map((e) => Math.round(e));
        }
        else {
            obj.setIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryQSetsResponse();
        message.setIds = object.setIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryRarityDistributionRequest() {
    return { setId: 0 };
}
export const QueryRarityDistributionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.setId !== 0) {
            writer.uint32(8).uint64(message.setId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRarityDistributionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.setId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { setId: isSet(object.setId) ? Number(object.setId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.setId !== undefined && (obj.setId = Math.round(message.setId));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRarityDistributionRequest();
        message.setId = object.setId ?? 0;
        return message;
    },
};
function createBaseQueryRarityDistributionResponse() {
    return { current: [], wanted: [] };
}
export const QueryRarityDistributionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.current) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.wanted) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRarityDistributionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.current.push(reader.uint32());
                        }
                    }
                    else {
                        message.current.push(reader.uint32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.wanted.push(reader.uint32());
                        }
                    }
                    else {
                        message.wanted.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            current: Array.isArray(object?.current) ? object.current.map((e) => Number(e)) : [],
            wanted: Array.isArray(object?.wanted) ? object.wanted.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.current) {
            obj.current = message.current.map((e) => Math.round(e));
        }
        else {
            obj.current = [];
        }
        if (message.wanted) {
            obj.wanted = message.wanted.map((e) => Math.round(e));
        }
        else {
            obj.wanted = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRarityDistributionResponse();
        message.current = object.current?.map((e) => e) || [];
        message.wanted = object.wanted?.map((e) => e) || [];
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QCard = this.QCard.bind(this);
        this.QCardContent = this.QCardContent.bind(this);
        this.QUser = this.QUser.bind(this);
        this.QCardchainInfo = this.QCardchainInfo.bind(this);
        this.QVotingResults = this.QVotingResults.bind(this);
        this.QVotableCards = this.QVotableCards.bind(this);
        this.QCards = this.QCards.bind(this);
        this.QMatch = this.QMatch.bind(this);
        this.QSet = this.QSet.bind(this);
        this.QSellOffer = this.QSellOffer.bind(this);
        this.QCouncil = this.QCouncil.bind(this);
        this.QMatches = this.QMatches.bind(this);
        this.QSellOffers = this.QSellOffers.bind(this);
        this.QServer = this.QServer.bind(this);
        this.QSets = this.QSets.bind(this);
        this.RarityDistribution = this.RarityDistribution.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QCard(request) {
        const data = QueryQCardRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCard", data);
        return promise.then((data) => OutpCard.decode(new _m0.Reader(data)));
    }
    QCardContent(request) {
        const data = QueryQCardContentRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCardContent", data);
        return promise.then((data) => QueryQCardContentResponse.decode(new _m0.Reader(data)));
    }
    QUser(request) {
        const data = QueryQUserRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QUser", data);
        return promise.then((data) => User.decode(new _m0.Reader(data)));
    }
    QCardchainInfo(request) {
        const data = QueryQCardchainInfoRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCardchainInfo", data);
        return promise.then((data) => QueryQCardchainInfoResponse.decode(new _m0.Reader(data)));
    }
    QVotingResults(request) {
        const data = QueryQVotingResultsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QVotingResults", data);
        return promise.then((data) => QueryQVotingResultsResponse.decode(new _m0.Reader(data)));
    }
    QVotableCards(request) {
        const data = QueryQVotableCardsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QVotableCards", data);
        return promise.then((data) => QueryQVotableCardsResponse.decode(new _m0.Reader(data)));
    }
    QCards(request) {
        const data = QueryQCardsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCards", data);
        return promise.then((data) => QueryQCardsResponse.decode(new _m0.Reader(data)));
    }
    QMatch(request) {
        const data = QueryQMatchRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QMatch", data);
        return promise.then((data) => Match.decode(new _m0.Reader(data)));
    }
    QSet(request) {
        const data = QueryQSetRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSet", data);
        return promise.then((data) => OutpSet.decode(new _m0.Reader(data)));
    }
    QSellOffer(request) {
        const data = QueryQSellOfferRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSellOffer", data);
        return promise.then((data) => SellOffer.decode(new _m0.Reader(data)));
    }
    QCouncil(request) {
        const data = QueryQCouncilRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QCouncil", data);
        return promise.then((data) => Council.decode(new _m0.Reader(data)));
    }
    QMatches(request) {
        const data = QueryQMatchesRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QMatches", data);
        return promise.then((data) => QueryQMatchesResponse.decode(new _m0.Reader(data)));
    }
    QSellOffers(request) {
        const data = QueryQSellOffersRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSellOffers", data);
        return promise.then((data) => QueryQSellOffersResponse.decode(new _m0.Reader(data)));
    }
    QServer(request) {
        const data = QueryQServerRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QServer", data);
        return promise.then((data) => Server.decode(new _m0.Reader(data)));
    }
    QSets(request) {
        const data = QueryQSetsRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "QSets", data);
        return promise.then((data) => QueryQSetsResponse.decode(new _m0.Reader(data)));
    }
    RarityDistribution(request) {
        const data = QueryRarityDistributionRequest.encode(request).finish();
        const promise = this.rpc.request("DecentralCardGame.cardchain.cardchain.Query", "RarityDistribution", data);
        return promise.then((data) => QueryRarityDistributionResponse.decode(new _m0.Reader(data)));
    }
}
var globalThis = (() => {
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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