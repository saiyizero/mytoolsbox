create table myoffice_systmenu(
    menuidno varchar (10),
    menutype varchar (2),
    menulink varchar (100),
    menuname varchar (500),
    menuicon varchar (100)
);
create unique index myoffice_systmenu_idx1 on myoffice_systmenu (menuidno);
