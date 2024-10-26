export default function TaskInput() {
  return (
    <div>
      <form>
        <label>
          Task : <input type="text" value={description} />
        </label>
        <label>
          Date :<input type="date" name="date" />
        </label>
        <label>
          Category
          <select name="category">
            <option value="">Work</option>
            <option value="">Perso</option>
            <option value="">Errands</option>
          </select>
        </label>
        <label>
          Priority
          <select name="priority">
            <option value="">Low priority</option>
            <option value="">Neutral</option>
            <option value="">High priority</option>
            <option value="">Critical</option>
          </select>
        </label>
        {/* Ajouter date de fin */}
        <button>Add task</button>
      </form>
    </div>
  );
}
