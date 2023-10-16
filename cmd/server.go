/*
Copyright © 2023 jaronnie <jaron@jaronnie.com>

*/

package cmd

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jaronnie/goframe/server"
	"github.com/spf13/cobra"
)

// serverCmd represents the server command
var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "goframe server",
	Long:  `goframe server`,
	RunE: func(cmd *cobra.Command, args []string) error {
		r := gin.New()
		server.Cors(r)
		server.Router(r)
		base := fmt.Sprintf("%s:%s", "0.0.0.0", "8081")

		go func() {
			if err := r.Run(base); err != nil {
				panic(err)
			}

		}()

		// Wait for interrupt signal to gracefully shutdown the server with
		quit := make(chan os.Signal, 1)

		signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
		<-quit

		ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
		defer cancel()

		select {
		case <-ctx.Done():
			return nil
		default:
		}
		return nil
	},
}

func init() {
	rootCmd.AddCommand(serverCmd)
}
