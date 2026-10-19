const ALAMAT = "data/proyek.json";
export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    console.log("Status:", respons.status, "OK:", respons.ok);
    if (!respons.ok) {
      throw new Error("Status HTTP " + respons.status);
    }
    const data = await respons.json();
    if (!Array.isArray(data)) {
      throw new Error("Format data harus berupa larik.");
    }
    return data;
  } catch (galat) {
    console.error("Gagal mengambil data:", galat.message);
    throw galat;
  }
}
