"""Independent business assertions; shared workbook preservation remains in parent."""
def expected(state,fixture):
 value=dict(fixture['expected'])
 return value
def checks(state,fixture,table,actual_rows):
 value={r.get("key"):r.get("value") for r in table}
 return {'approved_pending_separated':value.get('approved')==36 and value.get('pending')==4}
