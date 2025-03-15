CREATE INDEX idx_historyentries_type_created_at 
ON historyentries (type, created_at);
--
CREATE INDEX idx_historyentries_created_at 
ON historyentries (created_at);
--
CREATE INDEX idx_historyentries_trigger_replied 
ON historyentries (trigger_has_been_replied_to);
--
CREATE INDEX idx_historyentries_userid_type_created 
ON historyentries (user_id, type, created_at);