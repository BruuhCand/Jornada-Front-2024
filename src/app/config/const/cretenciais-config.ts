export const CredenciaisConfigOptions = {
    admin: ["perfil", "marca", "fabrica"],
    marca: ["perfil", "fabrica"],
    fabrica: ["perfil", "marca"]
} as const;


export const TableMarca = {
    admin: ["nome", "cnpj", "email", "senha", "edit/excluir"],
    fabrica: ["nome", "cnpj" ]
}

export const Forms = {
    marca: ["nome", "cnpj", "telefone", "celular", "email", "senha"]
}