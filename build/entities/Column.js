"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnOfBoard = void 0;
const typeorm_1 = require("typeorm");
const Board_1 = require("./Board");
// import {v4 as uuid} from 'uuid';
let ColumnOfBoard = class ColumnOfBoard {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ColumnOfBoard.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: '' }),
    __metadata("design:type", String)
], ColumnOfBoard.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('integer', { default: 0 }),
    __metadata("design:type", Number)
], ColumnOfBoard.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Board_1.BoardEntity, board => board.columns, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Board_1.BoardEntity)
], ColumnOfBoard.prototype, "board", void 0);
ColumnOfBoard = __decorate([
    typeorm_1.Entity({ name: 'columns' })
], ColumnOfBoard);
exports.ColumnOfBoard = ColumnOfBoard;
