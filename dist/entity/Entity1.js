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
const Entity2_1 = require("./Entity2");
let Entity1 = class Entity1 {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Entity1.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Entity1.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(t => Entity2_1.Entity2, a => a.Entity1),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Entity2_1.Entity2)
], Entity1.prototype, "Entity2", void 0);
Entity1 = __decorate([
    typeorm_1.Entity()
], Entity1);
exports.Entity1 = Entity1;
//# sourceMappingURL=Entity1.js.map