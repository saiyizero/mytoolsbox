create table myoffice_tablnode(
	tablidno varchar (10),
    tablname varchar (100),
    chinname varchar (200),
    weihuser varchar (50),
    weihtime varchar (8),
    weihdate varchar (8)
);
create unique index myoffice_tablnode_idx1 on myoffice_tablnode (tablidno);
