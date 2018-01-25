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
const Entity4_1 = require("./Entity4");
let Entity3 = class Entity3 {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Entity3.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(t => Entity2_1.Entity2, a => a.Entity3),
    __metadata("design:type", Entity2_1.Entity2)
], Entity3.prototype, "Entity2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Entity3.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(t => Entity4_1.Entity4, entity4 => entity4.Entity3),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Entity3.prototype, "Entity4", void 0);
Entity3 = __decorate([
    typeorm_1.Entity()
], Entity3);
exports.Entity3 = Entity3;
//# sourceMappingURL=Entity3.js.map