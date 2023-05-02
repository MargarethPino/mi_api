describe('PUT /api/users/:id', () => {
    test('Debería actualizar un usuario existente', async () => {
      const res = await request(app)
        .put(`/api/users/${newUserId}`)
        .send({
          EquipoRegistrado: 'Barcelona ',
          CategoriaJuego: 'futbol'
          ,Jugadores: 'Robert Lewandowski',
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.CategoriaJuego).toEqual('6449c0e58ccbe8460071c26e');
    });
    test('Debería dar error si se le pasa un ID inválido', async () => {
      const res = await request(app)
        .put('/api/users/futbol')
        .send({
          EquipoRegistrado: 'Barcelona ',
          CategoriaJuego: 'futbol'
          ,Jugadores: 'Robert Lewandowski',
        });
      expect(res.statusCode).toEqual(500);
    });
  });
  