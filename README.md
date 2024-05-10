# Google spreadsheets improved query

Use column names in your Google Spreadsheets QUERY() functions. 
This script is based on this [YouTube](https://www.youtube.com/watch?v=clq7WlC2whk) tutorial.

Script ID: `1BZyZAV5h_cgqvMh0oU86PiKC_GK6yMPPk74eDmQjZ2Ijrhm-si3BwUxd`

## Usage

```
=QUERY(A1:H, SELECT("SELECT SUM([amount]) WHERE [amount] > 0 LABEL SUM([amount]) ''", 'A1:Z1), 0) 
```

`SELECT` expects 2 parameters:
- Your query
- Range of the column names (should be exactly one row)

### Query placeholders

Each column name (= placeholder) needs to be surrounded with `[ ]` and can be targeted 
with the [camelCase](https://en.wikipedia.org/wiki/Camel_case) version of the names in the "header row":

<table>
  <tr>
    <th>Column name</th>
    <th>camelCase field</th>
  </tr>
  <tr>
    <td>id</td>
    <td>[id]</td>
  </tr>
    <tr>
    <td>Purchased On</td>
    <td>[purchasedOn]</td>
  </tr>
    <tr>
    <td>Amount</td>
    <td>[amount]</td>
  </tr>
</table>

## Adding the library to your project

The 'SELECT` function is made available as a script library. Follow [these steps](https://developers.google.com/apps-script/guides/libraries#add_a_library_to_your_script_project) to add it to your project.
