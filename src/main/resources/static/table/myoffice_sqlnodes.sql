create table myoffice_sqlnodes(
	sqlsidno varchar (10),
    sqlstrin varchar (2000),
    chinname varchar (200),
    weihuser varchar (50),
    weihtime varchar (8),
    weihdate varchar (8)
);
create unique index myoffice_sqlnodes_idx1 on myoffice_sqlnodes (sqlsidno);
