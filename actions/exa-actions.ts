import Exa from "exa-js";

const exa = new Exa("af4cdd84-2488-4bba-8f8d-acbafac3157b");

export async function searchExa(query: string) {
  try {
    const result = await exa.searchAndContents(query, {
      type: "neural",
      useAutoprompt: true,
      numResults: 10,
      text: true
    });
    return result;
  } catch (error) {
    console.error("Error searching Exa:", error);
    throw new Error("Failed to search Exa");
  }
}