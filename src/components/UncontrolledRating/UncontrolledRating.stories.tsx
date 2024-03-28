import React, { Component, useState } from "react";
import { action } from '@storybook/addon-actions';
import { UncontrolledRating, RatingValueType } from "./UncontrolledRating";
// import { RatingValueType } from "../Rating/Rating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}


const callback = action("rating  changed inside component")

export const EmptyRatting = () => <UncontrolledRating defaultValue={0} onChange={callback} />
export const Ratting1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />
export const Ratting2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />
export const Ratting3 = () => <UncontrolledRating defaultValue={3} onChange={callback} />
export const Ratting4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />
export const Ratting5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />

