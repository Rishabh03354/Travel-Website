export default function SearchBar() {
  return (
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 w-5/6">

      <div className="grid grid-cols-4 gap-5">

        <input
          className="border rounded-xl p-4"
          placeholder="Destination"
        />

        <input
          type="date"
          className="border rounded-xl p-4"
        />

        <select className="border rounded-xl p-4">
          <option>Adventure</option>
          <option>Honeymoon</option>
          <option>Family</option>
        </select>

        <button className="bg-teal-600 hover:bg-teal-700 transition rounded-xl text-white font-semibold">
  Search Tours
</button>

      </div>

    </div>
  );
}