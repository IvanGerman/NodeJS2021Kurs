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
exports.TaskEntity = void 0;
const typeorm_1 = require("typeorm");
// import {v4 as uuid} from 'uuid';
let TaskEntity = class TaskEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TaskEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: '' }),
    __metadata("design:type", String)
], TaskEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('integer', { default: 0 }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: '' }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: null, nullable: true }),
    __metadata("design:type", Object)
], TaskEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: null, nullable: true }),
    __metadata("design:type", Object)
], TaskEntity.prototype, "boardId", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 64, default: null, nullable: true }),
    __metadata("design:type", Object)
], TaskEntity.prototype, "columnId", void 0);
TaskEntity = __decorate([
    typeorm_1.Entity({ name: 'tasks' })
], TaskEntity);
exports.TaskEntity = TaskEntity;
