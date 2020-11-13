export const db = {
  state: [{ id: 1, email: "john@mail.com", password: "123" }],
  async findOne(email: string) {
    return db.state.find((u) => u.email === email) || null;
  },
};
