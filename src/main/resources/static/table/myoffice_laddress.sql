create table myoffice_laddress (
    dbasname varchar (10),
    username varchar (50),
    password varchar (50),
    connturl varchar (100),
    linktype varchar (4),
    passtype varchar (1),
    dbschema varchar (50),
    dbdriver varchar (50)
);
create unique index myoffice_laddress_idx1 on myoffice_laddress (dbasname);
