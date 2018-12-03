# DATABASE SCRIPT FOR POSTGRESQL

-- Table: public."List"

-- DROP TABLE public."List";

CREATE TABLE public."List"
(
    code uuid NOT NULL,
    name character varying(244) COLLATE pg_catalog."default",
    "user" character varying(244) COLLATE pg_catalog."default",
    CONSTRAINT "List_pkey" PRIMARY KEY (code)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."List"
    OWNER to postgres;



-- Table: public."Item"

-- DROP TABLE public."Item";

CREATE TABLE public."Item"
(
    code uuid,
    description character varying(244) COLLATE pg_catalog."default",
    done boolean,
    "listCode" uuid,
    "user" character varying(244) COLLATE pg_catalog."default",
    CONSTRAINT list_fk FOREIGN KEY ("listCode")
        REFERENCES public."List" (code) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Item"
    OWNER to postgres;


