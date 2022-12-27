const Sheldon = require ("./javaS")

test ('tijeras cortan papel',  () => {
    expect(Sheldon("tijeras", "papel")). toBe ('Gana tijeras')
 })

 test ('El papel cubre la piedra',  () => {
    expect(Sheldon("papel", "piedra")). toBe ('Gana papel')
 })
 test ('Lagarto aplasta la piedra',  () => {
    expect(Sheldon("lagarto", "piedra")). toBe ('Gana lagarto')
 })
 test ('Lagarto aplasta la roca',  () => {
    expect(Sheldon("lagarto", "piedra")). toBe ('Gana lagarto')
 })
 test ('Spock rompe (o derrite) las tijeras',  () => {
    expect(Sheldon("Spock", "tijeras")). toBe ('Gana Spock')
 })
 test ('Tijeras decapitan a lagarto',  () => {
    expect(Sheldon("tijeras", "lagarto")). toBe ('Gana tijeras')
 })
 test ('Lagarto come papel',  () => {
    expect(Sheldon("lagarto", "papel")). toBe ('Gana lagarto')
 })
 test ('El papel refuta a Spock',  () => {
    expect(Sheldon("papel", "Spock")). toBe ('Gana papel')
 })
 test ('Spock vaporiza la roca',  () => {
    expect(Sheldon("Spock", "piedra")). toBe ('Gana Spock')
 })
 test ('Tijeras para romper rocas',  () => {
    expect(Sheldon("tijeras", "roca")). toBe ('Gana tijeras')
 })
