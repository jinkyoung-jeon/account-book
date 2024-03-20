-- DDL
create table acnt (
    id varchar(20) primary key not null,
    pswd varchar(20) not null,
    rmrk_cn varchar(4000)
);

create table public.user (
    user_no varchar(10) primary key not null,
    up_cd_id varchar(20) not null,
    rmrk_cn varchar(4000),
    constraint fk_user_up_cd_id foreign key (up_cd_id) references acnt(id) on delete cascade
);

create table acntg (
    user_no varchar(10) primary key not null,
    bgng_ymd date,
    end_ymd date,
    cal_day_cnt numeric(10),
    cal_amt numeric(15),
    use_amt numeric(15),
    use_psblty_amt numeric(15),
    dow_acml_amt numeric(15),
    acml_gramt numeric(15),
    constraint fk_acntg_user_no foreign key (user_no) references public.user(user_no) on delete cascade
);

create table stats (
    id varchar(20) primary key not null,
    up_cd_id varchar(20) not null,
    dow_acml_amt numeric(15),
    acml_gramt numeric(15),
    constraint fk_stats_up_cd_id foreign key (up_cd_id) references acntg(user_no) on delete cascade
);