import Elysia, { Static, t } from "elysia"

import { password } from "bun"
import { profile } from "bun:jsc"
export const _login = t.Object({
    username :t.String(),
    password: t.String()
})
export const _register =t.Object({
    username :t.String(),
    password :t.String(),
    display_name : t.String(),
    date_of_birth: t.Optional(t.Date()),
    looking_for : t.Union([t.Literal("male"),t.Literal('famale'),t.Literal("all")]),
})
export const _profile = t.Object({
    ...t.Omit(_register,['password']).propertiesm,
    id:t.String(),
    introductiont:t.Optional(t.String()),
    interest:t.Optional(t.String()),
    age:t.Optional(t.String()),
    last_active:t.Optional(t.String()),
    created:t.Optional(t.String()),
    updated:t.Optional(t.String()),
    //photo : photo_id[] //ยังไม่เสร็จ
})

export const _user =t.Object({
    ..._profile.properties,
    //Like Feature //followers:profile[] //ยังไม่เสร็จ
    //following:profile[]
})
export const _account = t.Object({
    user:_user,
    token : t.String()
})

export const AccountDto= new Elysia().model({
    //request
    register : _register,
    login : _login,
    //response
    account :_account
})
export type user =Static<typeof _user>
export type register =Static<typeof _register>
export type login =Static<typeof _login>