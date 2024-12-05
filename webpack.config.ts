import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"; 

type Mode = 'development' | 'production';

interface EnvVariables { 
    mode: Mode;
    port: number;
}

export default (env: EnvVariables) => {
    const isDevMode = env.mode === 'development';
    console.log(isDevMode, env.mode)

    const config = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            isDevMode && new webpack.ProgressPlugin()
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        }, 
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        devServer: isDevMode ? {
            port: env.port ?? 3000,
            open: true, // Автоматический запуск в браузере при запуске
        } : undefined,
        devtool: isDevMode ? 'inline-source-map' : undefined,
    }

    return config;
}
