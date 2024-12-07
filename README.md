# Zely Benchmark

```sh
# install dependencies
$ npm install
# start
$ node benchmark.js
```

## Benchmarks

- **node** v20.9.0

|                          | **Zely.js@4.0.0-beta.4** | **Express.js@4.21.2** | **Comparison Result (Zely 4.0.0 vs Express 4.12.2)** |
| ------------------------ | ------------------------ | --------------------- | ---------------------------------------------------- |
| **Avg Requests per Sec** | 15,163.6 Req/Sec         | 5,538.7 Req/Sec       | **2.74x faster**                                     |
| **Avg Latency**          | 0.04 ms                  | 1.16 ms               | **29x shorter**                                      |
| **Avg Bytes per Sec**    | 2.05 MB/Sec              | 1.32 MB/Sec           | **1.55x faster**                                     |
| **Total Requests**       | 164k                     | 55k                   | **2.98x more**                                       |
| **Total Bytes Read**     | 22.2 MB                  | 13.2 MB               | **1.68x more**                                       |

### Zely.js@4.0.0-beta.4

```txt
┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 0.04 ms │ 0.26 ms │ 22 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 11263   │ 11263   │ 16215   │ 17455   │ 15163.6 │ 2284.72 │ 11258   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.52 MB │ 1.52 MB │ 2.19 MB │ 2.36 MB │ 2.05 MB │ 308 kB  │ 1.52 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 42

164k requests in 10.04s, 22.2 MB read
```

> Because there is an error in production mode (`4.0.0-beta.4`), to compile target page, server will fetch it before starting benchmark.

> ```txt
> ┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
> │ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
> ├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
> │ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.51 ms │ 80 ms │
> └─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
> ┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
> │ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
> ├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
> │ Req/Sec   │ 12071   │ 12071   │ 17279   │ 17535   │ 16745.46 │ 1521.39 │ 12067   │
> ├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
> │ Bytes/Sec │ 1.63 MB │ 1.63 MB │ 2.33 MB │ 2.37 MB │ 2.26 MB  │ 205 kB  │ 1.63 MB │
> └───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘
> ```
>
> The difference is subtle except for max latency

### Express.js@4.21.2

```txt
┌─────────┬──────┬──────┬───────┬──────┬─────────┬────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev  │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼────────┼───────┤
│ Latency │ 1 ms │ 1 ms │ 3 ms  │ 3 ms │ 1.16 ms │ 0.6 ms │ 25 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴────────┴───────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 3701   │ 3701   │ 5679    │ 5931    │ 5538.7  │ 625.83 │ 3700   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 885 kB │ 885 kB │ 1.36 MB │ 1.42 MB │ 1.32 MB │ 150 kB │ 884 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

55k requests in 10.04s, 13.2 MB read

```

## History

Zely.js@3.0.0-alpha.14 (production mode) (no longer update)

```txt
┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 1 ms │ 1 ms  │ 1 ms │ 0.83 ms │ 0.42 ms │ 12 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 5307   │ 5307   │ 6991   │ 7311   │ 6890.4 │ 545.74  │ 5305   │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 716 kB │ 716 kB │ 944 kB │ 987 kB │ 930 kB │ 73.7 kB │ 716 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 41

76k requests in 10.03s, 10.2 MB read


```

Zely.js@2.0.0-next.21 (enable `prebuild`) (no longer update)

```txt
┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 1 ms │ 1 ms │ 1 ms  │ 2 ms │ 1.02 ms │ 0.19 ms │ 14 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Req/Sec   │ 6331   │ 6331   │ 8391    │ 8695    │ 8258.37 │ 623.8   │ 6330   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Bytes/Sec │ 855 kB │ 855 kB │ 1.13 MB │ 1.17 MB │ 1.11 MB │ 84.1 kB │ 855 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 11

91k requests in 11.01s, 12.3 MB read
```
