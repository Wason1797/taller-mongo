/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     14/7/2019 22:15:21                           */
/*==============================================================*/


drop table if exists BRAND;

drop table if exists MODEL;

drop table if exists OWNER;

drop table if exists VEHICLE;

/*==============================================================*/
/* Table: BRAND                                                 */
/*==============================================================*/
create table BRAND
(
   CODEBRAND            varchar(20) not null,
   NAME                 varchar(20),
   primary key (CODEBRAND)
);

/*==============================================================*/
/* Table: MODEL                                                 */
/*==============================================================*/
create table MODEL
(
   CODEMODEL            varchar(20) not null,
   CODEBRAND            varchar(20) not null,
   NAME                 varchar(20),
   primary key (CODEMODEL)
);

/*==============================================================*/
/* Table: OWNER                                                 */
/*==============================================================*/
create table OWNER
(
   DNI                  varchar(10) not null,
   NAME                 varchar(20),
   BIRTHDATE            date,
   primary key (DNI)
);

/*==============================================================*/
/* Table: VEHICLE                                               */
/*==============================================================*/
create table VEHICLE
(
   PLATE                varchar(8) not null,
   CODEBRAND            varchar(20) not null,
   CODEMODEL            varchar(20) not null,
   DNI                  varchar(10) not null,
   YEAR                 numeric(4,0),
   ENGINE               numeric(4,0),
   TRANSMISION          varchar(3),
   primary key (PLATE)
);

alter table MODEL add constraint FK_RELATIONSHIP_4 foreign key (CODEBRAND)
      references BRAND (CODEBRAND) on delete restrict on update restrict;

alter table VEHICLE add constraint FK_RELATIONSHIP_1 foreign key (CODEBRAND)
      references BRAND (CODEBRAND) on delete restrict on update restrict;

alter table VEHICLE add constraint FK_RELATIONSHIP_2 foreign key (CODEMODEL)
      references MODEL (CODEMODEL) on delete restrict on update restrict;

alter table VEHICLE add constraint FK_RELATIONSHIP_3 foreign key (DNI)
      references OWNER (DNI) on delete restrict on update restrict;

