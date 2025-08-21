import { describe, expect, test } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";

import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data'

describe('getGifsByQuery', () => {

    const mock = new AxiosMockAdapter(giphyApi);

    // test('should return a list of gifs', async () => {
    //     const gifs = await getGifsByQuery('goku');
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
    // });

    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('goku'); 

        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect( typeof gif.id).toBe('string');
        });
    });
});