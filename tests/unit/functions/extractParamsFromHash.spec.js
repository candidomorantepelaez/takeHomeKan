import extractParamsFromHash from "@/functions/extractParamsFromHash";

describe("functions::extractParamsFromHash", () => {
  it("extractParamsFromHash with empty string return empty object", () => {
    const hash = "";
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({});
  });

  it("extractParamsFromHash with a string only with # return empty object", () => {
    const hash = "#";
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({});
  });

  it("extractParamsFromHash with a null value return empty object", () => {
    const hash = null;
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({});
  });

  it("extractParamsFromHash with a undefined value return empty object", () => {
    const hash = undefined;
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({});
  });

  it("extractParamsFromHash with a number value return empty object", () => {
    const hash = 234;
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({});
  });

  it("extractParamsFromHash with a '#access_token=NwAE&token_type=Bearer&expires_in=3600' value return {access_token: 'NwAE',token_type: 'Bearer',expires_in: '3600'}", () => {
    const hash = "#access_token=NwAE&token_type=Bearer&expires_in=3600";
    const params = extractParamsFromHash(hash);
    expect(params).toEqual({
      access_token: "NwAE",
      token_type: "Bearer",
      expires_in: "3600"
    });
  });
});
