create table myoffice_zaxicsub (
    ckcshmch VARCHAR2 (500),
    ckcshmsh VARCHAR2 (150),
    cunkcszh VARCHAR2 (32) 
);
create unique index myoffice_zaxicsub_idx1 on myoffice_zaxicsub (ckcshmch);