-- script to list all databses
CREATE TRIGGER validate_email BEFORE UPDATE ON users
FOR EACH ROW
IF OLD.email != NEW.email THEN
    SET NEW.valid_email = 0;
END IF;