-- DML
insert into ACNT values (
                         'admin', 'admin123', '테스트 계정입니다.'
                        );

insert into public.USER values (
                         'admin-01', 'admin', '테스트 유저입니다.'
                        );

insert into acntg (user_no) values (
                          'admin-01'
                         );

insert into stats (id, up_cd_id) values (
                          'stats-admin-01', 'admin-01'
                         );