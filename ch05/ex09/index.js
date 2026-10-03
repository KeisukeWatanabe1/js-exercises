export function parseJSON(s) {
  try {
    const data = JSON.parse(s);
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
}
