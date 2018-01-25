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
const typeorm_1 = require("typeorm");
const Entity1_1 = require("./Entity1");
const Entity3_1 = require("./Entity3");
let Entity2 = class Entity2 {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Entity2.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Entity2.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(t => Entity1_1.Entity1, a => a.Entity2),
    __metadata("design:type", Entity1_1.Entity1)
], Entity2.prototype, "Entity1", void 0);
__decorate([
    typeorm_1.OneToOne(t => Entity3_1.Entity3, a => a.Entity2),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Entity3_1.Entity3)
], Entity2.prototype, "Entity3", void 0);
Entity2 = __decorate([
    typeorm_1.Entity()
], Entity2);
exports.Entity2 = Entity2;
//# sourceMappingURL=Entity2.js.map