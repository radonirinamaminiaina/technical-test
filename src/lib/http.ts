import { Node } from "typescript";

interface FetchOptions extends RequestInit {
  // number of retries before returning the error
  retries?: number;

  // timeout in milliseconds to not exceed to receive a response from server
  timeout?: number;
}

/**
 * Execute fetch with additional options, inlcuding retries and timeout
 *
 * @param url: URL to call
 * @param o FetchOptions: options to pass to fetch, including retries and timeout
 *
 * @todo:
 * - implement retries flow: when the request fails, the retry flow is executed.
 *    When attempts are exhausted, the entire process should result into failure
 *    by keeping the original error
 * - timeout flow: when the response is not received within the timeout,
 *    the request is aborted, and the retry flow is executed
 *
 * You can find an example of usage at `src/app/fetch/pages.tsx`
 * It makes an API call to /api/mayfail, which may fail over calls and duration varies from 0 to 2 seconds
 *
 * So for better testing, you can change the `retries` and `timeout` values to have a value under 2 seconds
 *
 * @param url
 * @param o
 * @returns
 */
export default async function fetchEnhanced(url: string, o: FetchOptions): Promise<Response> {
  let { retries = 0, timeout = 0, ...options } = o || {};

  return new Promise<Response>(async (resolve, reject) => {
    let time: any = 0
    const retryFlow = (retries: number, error: string) => {
      retries--
      console.log('Attempted left number', retries)
      if (retries === 0) {
        reject(error)
      } else {
        time = setTimeout(() => {
          o.retries = retries
          clearTimeout(time)
          fetchEnhanced(url, o)
        }, timeout)
      }
    }
    
    const data = await fetch(url, options)
    
    if (data.status >= 400) {
      retryFlow(retries, data.statusText)   
    } else {
      clearTimeout(time)
    }

    return resolve(data)

  })

}
