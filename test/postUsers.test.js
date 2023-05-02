describe('POST /api/users', () => {
    test('Debería crear un nuevo usuario', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          EquipoRegistrado: 'Barcelona' ,
          CategoriaJuego: 'futbol',
          Jugadores: 'Robert Lewandowski',
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.EquipoRegistrado).toEqual('Barcelona');
      expect(res.body.CategoriaJuego).toEqual('futbol');
      expect(res.body.Jugadores).toEqual(' Robert Lewandowski' ) ;
    });
    test('Debería dar error si falta algún campo requerido', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          EquipoRegistrado: 'Barcelona'
        });
      expect(res.statusCode).toEqual(400);
    });
  });