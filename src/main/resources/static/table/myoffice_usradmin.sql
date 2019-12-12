create table myoffice_usradmin£¨
    username varchar (50),
    password varchar (50),
    chinname varchar (100),
    userrole varchar (1),
    phonenum varchar (30),
    weihuser varchar (50),
    weihtime varchar (8),
    weihdate varchar (8)
);
create unique index myoffice_usradmin_idx1 on myoffice_usradmin (username);
