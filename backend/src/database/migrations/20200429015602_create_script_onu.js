
exports.up = function(knex) {
    return knex.schema.createTable('script-onu', function (table){
        table.string('name').notNullable()
        table.string('vlan').notNullable()
        table.string('ip').notNullable()
        table.string('script-base').notNullable()
        table.string('script-base-com-rb').notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('script-onu')
};
